from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.parsers import MultiPartParser, FormParser

from .models import GalleryImage, Gallery
from .serializers import GalleryImageSerializer, GallerySerializer


class GalleryListAPIView(ListAPIView):
    queryset = Gallery.objects.filter(is_active=True).prefetch_related("images")
    serializer_class = GallerySerializer


class GalleryUploadAPIView(APIView):
    permission_classes = []
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        title = request.data.get("title", "")

        # Get all uploaded files with key 'images'
        images = request.FILES.getlist("images")

        if not images:
            return Response({"error": "At least one image file is required"}, status=400)

        created_images = []

        for image in images:
            gallery_image = GalleryImage.objects.create(
                title=title,
                image=image
            )
            created_images.append(gallery_image)

        serializer = GalleryImageSerializer(created_images, many=True)

        return Response({
            "success": True,
            "count": len(created_images),
            "data": serializer.data
        })


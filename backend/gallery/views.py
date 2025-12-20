from rest_framework.generics import ListAPIView
from .models import GalleryImage
from .serializers import GalleryImageSerializer

class GalleryListAPIView(ListAPIView):
    queryset = GalleryImage.objects.all().order_by("-created_at")
    serializer_class = GalleryImageSerializer

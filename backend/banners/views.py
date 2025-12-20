from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny   # ✅ ADD THIS
from .models import Banner
from .serializers import BannerSerializer


class BannerListAPIView(APIView):
    permission_classes = [AllowAny]   # ✅ VERY IMPORTANT

    def get(self, request):
        banners = Banner.objects.filter(is_active=True)
        serializer = BannerSerializer(banners, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

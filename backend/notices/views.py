from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Notice
from .serializers import NoticeSerializer


class NoticeListAPIView(ListAPIView):
    queryset = Notice.objects.filter(is_active=True).order_by("-created_at")
    serializer_class = NoticeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

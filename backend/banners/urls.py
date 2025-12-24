from django.urls import path
from .views import BannerListAPIView

# banners/urls.py
urlpatterns = [
    path("", BannerListAPIView.as_view()),
]

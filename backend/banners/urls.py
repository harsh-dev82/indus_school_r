from django.urls import path
from .views import BannerListAPIView

# banners/urls.py
urlpatterns = [
    path("banners/", BannerListAPIView.as_view()),
]

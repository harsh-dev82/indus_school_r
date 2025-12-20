from django.urls import path
from .views import GalleryListAPIView

urlpatterns = [
    path("", GalleryListAPIView.as_view()),
    #path("pages/gallery/", GalleryListAPIView.as_view()),
]

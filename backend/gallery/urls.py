from django.urls import path
from .views import GalleryListAPIView, GalleryUploadAPIView

urlpatterns = [
    path("", GalleryListAPIView.as_view()),
    #path("pages/gallery/", GalleryListAPIView.as_view()),
    path("upload/", GalleryUploadAPIView.as_view()),
]

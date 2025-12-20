from django.urls import path
from .views import PageDetailAPIView, PrincipalMessageAPIView

urlpatterns = [
    path("<slug:slug>/", PageDetailAPIView.as_view()),
    path("principal/", PrincipalMessageAPIView.as_view()),
]

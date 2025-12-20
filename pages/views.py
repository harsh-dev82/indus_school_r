from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.response import Response

from .models import Page, PrincipalMessage
from .serializers import PageSerializer, PrincipalMessageSerializer


# ======================
# PUBLIC APIs
# ======================

class PageDetailAPIView(RetrieveAPIView):
    """
    Fetch a CMS page by slug
    Example: /api/pages/about-us/
    """
    queryset = Page.objects.filter(is_active=True)
    serializer_class = PageSerializer
    lookup_field = "slug"


class PageListAPIView(ListAPIView):
    """
    Optional: list all active pages
    """
    queryset = Page.objects.filter(is_active=True)
    serializer_class = PageSerializer


class PrincipalMessageAPIView(RetrieveAPIView):
    """
    Fetch latest active principal message
    """
    serializer_class = PrincipalMessageSerializer

    def get_object(self):
        return PrincipalMessage.objects.filter(is_active=True).last()

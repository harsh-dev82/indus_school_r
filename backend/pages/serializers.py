from rest_framework import serializers
from .models import Page, PrincipalMessage

class PageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Page
        fields = "__all__"


class PrincipalMessageSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)

    class Meta:
        model = PrincipalMessage
        fields = "__all__"

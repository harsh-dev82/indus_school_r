from rest_framework import serializers
from .models import Notice

class NoticeSerializer(serializers.ModelSerializer):
    file = serializers.FileField(use_url=True)

    class Meta:
        model = Notice
        fields = "__all__"

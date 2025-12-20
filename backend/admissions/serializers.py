from rest_framework import serializers
from .models import AdmissionEnquiry

class AdmissionEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionEnquiry
        fields = "__all__"

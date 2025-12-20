from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

from .models import AdmissionEnquiry
from .serializers import AdmissionEnquirySerializer


class AdmissionEnquiryAPIView(CreateAPIView):
    """
    Public API
    POST /api/admissions-enquiry/
    """
    queryset = AdmissionEnquiry.objects.all()
    serializer_class = AdmissionEnquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        enquiry = serializer.save()

        # Email notification to admin (testing / production safe)
        send_mail(
            subject="New Admission Enquiry",
            message=(
                "New Admission Enquiry Received:\n\n"
                f"Name: {enquiry.name}\n"
                f"Email: {enquiry.email}\n"
                f"Phone: {enquiry.phone}\n"
                f"Class Applied: {enquiry.class_applied}\n"
                f"Message: {enquiry.message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=True,
        )

        return Response(
            {"message": "Admission enquiry submitted successfully"},
            status=status.HTTP_201_CREATED,
        )

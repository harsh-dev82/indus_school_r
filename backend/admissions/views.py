from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import logging
import threading

from .models import AdmissionEnquiry
from .serializers import AdmissionEnquirySerializer

logger = logging.getLogger(__name__)


class AdmissionEnquiryAPIView(CreateAPIView):
    queryset = AdmissionEnquiry.objects.all()
    serializer_class = AdmissionEnquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        enquiry = serializer.save()

        subject = "New Admission Enquiry"
        message = (
            "New Admission Enquiry Received:\n\n"
            f"Name: {enquiry.name}\n"
            f"Email: {enquiry.email}\n"
            f"Phone: {enquiry.phone}\n"
            f"Class Applied: {enquiry.class_applied}\n"
            f"Message: {enquiry.message}"
        )

        # 🔐 Send email safely in background
        def send_email_safe():
            try:
                send_mail(
                    subject=subject,
                    message=message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.DEFAULT_FROM_EMAIL],
                    fail_silently=True,   # <-- never crash
                )
            except Exception as e:
                logger.error(f"Email sending failed: {e}")

        threading.Thread(target=send_email_safe).start()

        return Response(
            {
                "message": "Admission enquiry submitted successfully",
                "id": enquiry.id,
            },
            status=status.HTTP_201_CREATED,
        )

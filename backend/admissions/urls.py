from django.urls import path
from .views import AdmissionEnquiryAPIView

urlpatterns = [
    path("", AdmissionEnquiryAPIView.as_view(), name="admissions-enquiry"),
]

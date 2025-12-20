from django.contrib import admin
from .models import AdmissionEnquiry

@admin.register(AdmissionEnquiry)
class AdmissionEnquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "class_applied", "created_at")
    search_fields = ("name", "email", "phone")

from django.contrib import admin
from django.urls import path
from django.shortcuts import render, redirect
from .models import GalleryImage, Gallery


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'created_at']


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['gallery', 'created_at']
    change_list_template = "admin/gallery_changelist.html"

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('upload-multiple/', self.admin_site.admin_view(self.upload_multiple), name='gallery_upload_multiple'),
        ]
        return custom_urls + urls

    def upload_multiple(self, request):
        if request.method == "POST":
            title = request.POST.get("title")
            images = request.FILES.getlist("images")

            # Create or get the gallery title
            gallery, created = Gallery.objects.get_or_create(title=title)

            for img in images:
                GalleryImage.objects.create(
                    gallery=gallery,
                    image=img
                )

            return redirect("..")

        return render(request, "admin/gallery_upload.html")

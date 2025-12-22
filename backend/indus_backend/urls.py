from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

# JWT Auth
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# ================= ROOT HOME VIEW =================
def home(request):
    return JsonResponse({
        "status": "Indus School Backend is running"
    })

urlpatterns = [
    # ================= HOME =================
    path("", home),

    # ================= ADMIN =================
    path("admin/", admin.site.urls),

    # ================= API ROUTES =================
    path("api/admissions-enquiry/", include("admissions.urls")),
    path("api/contact/", include("contact.urls")),
    path("api/pages/", include("pages.urls")),
    path("api/gallery/", include("gallery.urls")),
    path("api/banners/", include("banners.urls")),
    path("api/notices/", include("notices.urls")),

    # ================= AUTH =================
    path("api/auth/login/", TokenObtainPairView.as_view(), name="jwt_login"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="jwt_refresh"),
]

# ================= MEDIA FILES =================
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

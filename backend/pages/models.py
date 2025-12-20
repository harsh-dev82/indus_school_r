from django.db import models

class Page(models.Model):
    """
    Generic CMS page
    Used for About, Academics, Infrastructure, etc.
    """
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    image = models.ImageField(
        upload_to="pages/",
        blank=True,
        null=True
    )
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title


class PrincipalMessage(models.Model):
    """
    Separate model for Principal's Message
    """
    name = models.CharField(max_length=100)
    designation = models.CharField(
        max_length=100,
        default="Principal"
    )
    message = models.TextField()
    photo = models.ImageField(upload_to="principal/")
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.designation}"

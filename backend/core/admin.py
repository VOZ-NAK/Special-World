from django.contrib import admin
from .models import (
    MaterialCategory, MaterialTag, Material,
    MaterialRating, MaterialContent, MaterialComment
)

# Register your models here.


admin.site.register(MaterialCategory)
admin.site.register(MaterialTag)
admin.site.register(Material)
admin.site.register(MaterialRating)
admin.site.register(MaterialContent)
admin.site.register(MaterialComment)

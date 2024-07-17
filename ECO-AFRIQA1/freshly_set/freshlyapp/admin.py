from django.contrib import admin

# Register your models here.

from .models import Product, Garden, Service, Blog

admin.site.register(Product)
admin.site.register(Garden)
admin.site.register(Service)
admin.site.register(Blog)


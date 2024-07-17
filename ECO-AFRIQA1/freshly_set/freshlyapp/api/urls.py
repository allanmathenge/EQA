from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


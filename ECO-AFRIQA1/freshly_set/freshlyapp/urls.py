from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from django.urls import re_path
from . import views
from .views import login_view

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('blogs/', views.blogs, name='blogs'),
    path('login/', views.login, name='login'),
    path('login/', login_view, name='login'),
    path('signup/', views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('products/', views.products, name='products'),
    path('services/', views.services, name='services'),
    path('profile/', views.profile, name='profile'),
]

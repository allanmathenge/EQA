from django import forms
from .models import Product, Service, Blog
from django.utils.text import slugify

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'image']

class ServiceRequestForm(forms.ModelForm):
    class Meta:
        model = Service
        fields = ['type', 'description', 'price']


class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = ['title', 'content', 'slug', 'image']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['slug'].required = False  # Make slug field optional
        self.fields['title'].widget.attrs.update({'class': 'form-control'})
        self.fields['content'].widget.attrs.update({'class': 'form-control'})
        self.fields['slug'].widget.attrs.update({'class': 'form-control'})
        self.fields['image'].widget.attrs.update({'class': 'form-control'})

    def save(self, *args, **kwargs):
        instance = super().save(commit=False)
        if not instance.slug:
            instance.slug = slugify(instance.title)
        instance.save()
        return instance
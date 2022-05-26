from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from .router import router

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls)
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
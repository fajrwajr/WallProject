from rest_framework import viewsets
from . import models
from . import serializers
from django.http import HttpResponse

class CommentViewset(viewsets.ModelViewSet):
    queryset = models.Comment.objects.all()
    serializer_class = serializers.CommentSerializer

def create(self, request, *args, **kwargs):
    request.data.update({'user_id': request.user.id})
    return super(CommentViewset, self).create(request, *args, **kwargs)
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer
from accounts.models import Comment
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'name',  'email', 'password') 

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields=('id', 'comment', 'user')
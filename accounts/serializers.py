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
        extra_kwargs = {
            'user': { 'read_only': True }
        }

    def create(self, validated_data):
        new_comment = Comment(**validated_data)
        new_comment.user_id = self.context['request'].user.id
        new_comment.save()
        return new_comment
 
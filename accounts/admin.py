from django.contrib import admin
from accounts.models import Comment

# Register your models here.
class CommentAdmin(admin.ModelAdmin):
    list_display=['id', 'name', 'comment']

admin.site.register(Comment, CommentAdmin)
from django.contrib import admin
from accounts.models import Comment, UserAccount

# Register your models here.
class CommentAdmin(admin.ModelAdmin):
    list_display=['id', 'comment', 'user']

class UserAccountAdmin(admin.ModelAdmin):
    list_display=['id', 'name', 'email', 'is_active']

admin.site.register(Comment, CommentAdmin)
admin.site.register(UserAccount, UserAccountAdmin)

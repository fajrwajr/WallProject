from accounts.viewsets import CommentViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('comment', CommentViewset)
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password, **other_fields):
        if not email:
            raise ValueError('Users must have an email adress')
        
        email = self.normalize_email(email)
        user = self.model(email=email, password=password)
        
        user.set_password(password)
        user.save()

        return user
    def create_superuser(self, email, password = None, **other_fields):
        
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        return self.create_user(email=email, password = password, is_superuser=True)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    # name = models.CharField(max_length=255)
    is_superuser = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['name']

    # def get_full_name(self):
    #     return self.name
    
    def __str__(self):
        return self.email

class Comment(models.Model):

   comment = models.CharField(max_length=250)
   user = models.ForeignKey(UserAccount, default=None, null=True, on_delete=models.CASCADE)

   def __str__(self):
    return self.user.name


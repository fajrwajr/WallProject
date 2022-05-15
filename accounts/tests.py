from django.test import TestCase, Client
from .models import UserAccount, Comment
from rest_framework.test import APIRequestFactory
#Create your tests here.
class BasicTest(TestCase):
    def test_models1(self):
        comment = Comment()
        comment.name = "Lila"
        comment.comment = "Hi, wanna hang out"
        comment.save()

        record = Comment.objects.get(pk=1)
        self.assertEqual(record, comment)

class BasicTest(TestCase):
    def test_models2(self):
        info = UserAccount()
        info.email = "l@gmail.com"
        info.name = "Lisa"
        is_active = True
        info.save()

        record = UserAccount.objects.get(pk=1)
        self.assertEqual(record, info)

class UserTest(TestCase):
    def setUp(self):
        UserAccount.objects.create(name="faj", email="reader@gmail.com", password="123website")
        UserAccount.objects.create(name="anne", email="anne@gmail.com", password="123websier")
    
    def test_user(self):
        user_faj = UserAccount.objects.get(name="faj")
        user_anne = UserAccount.objects.get(name="anne")

        self.assertEqual(user_faj, user_faj)
        self.assertEqual(user_anne, user_anne)


class User_Form_Test(TestCase):

    # Valid Form Data
    def test_UserForm_valid(self):
        form = UserAccount({'name': "faj", 'email': "reader@gmail.com", 'password': "123website"})
        self.assertTrue(True)

    # Invalid Form Data
    def test_UserForm_invalid(self):
        form = UserAccount({'name': "faj", 'email': "", 'password': "mp4webmusic"})
        self.assertFalse(False)

class Comment_Form_Test(TestCase):

    # Valid Form Data
    def test_comment_valid(self):
        form = Comment({'name': "faj", 'comment':"play another song"})
        self.assertTrue(True)

    # Invalid Form Data
    def test_comment_invalid(self):
        form = Comment({'name': "faj", 'comment': ""})
        self.assertFalse(False)

class ClientTestCase(TestCase):
    def test_signup(self):
        c = Client()
        response = c.post('/auth/users/', {'name': 'john', 'email': 'a@gmail.com', 'password': 'smith', 're_password': 'smith'
        })
        self.assertTrue(response.status_code)
        
class ClientTestCase(TestCase):
    def test_login(self):
        c = Client()
        response = c.post('auth/jwt/create/', {'email': 'a@gmail.com', 'password': 'smith'})
        self.assertTrue(response.status_code)
# Generated by Django 4.0.4 on 2022-05-26 16:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_rename_text_comment_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='user_id',
            new_name='user',
        ),
    ]
# Generated by Django 4.0.5 on 2022-06-01 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_alter_comment_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

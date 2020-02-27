# Generated by Django 2.2.8 on 2020-02-27 08:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('childAccount', '0005_merge_20200219_1219'),
    ]

    operations = [
        migrations.RenameField(
            model_name='childaccount',
            old_name='UnicornPowers',
            new_name='Aboutme',
        ),
        migrations.RemoveField(
            model_name='childaccount',
            name='ImpactEmblem',
        ),
        migrations.RemoveField(
            model_name='childaccount',
            name='UnicornName',
        ),
        migrations.AddField(
            model_name='childaccount',
            name='Dream',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='childaccount',
            name='FavoriteThing',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='childaccount',
            name='SuperPowers',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='childaccount',
            name='Support',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='childaccount',
            name='UserId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

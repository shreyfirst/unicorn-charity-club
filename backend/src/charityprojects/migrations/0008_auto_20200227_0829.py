# Generated by Django 2.2.8 on 2020-02-27 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charityprojects', '0007_auto_20200226_1721'),
    ]

    operations = [
        migrations.AlterField(
            model_name='charityprojects',
            name='Badge',
            field=models.ImageField(blank=True, null=True, upload_to='upload/projectBadge/'),
        ),
        migrations.AlterField(
            model_name='charityprojects',
            name='Banner',
            field=models.ImageField(blank=True, null=True, upload_to='upload/projectBanner/'),
        ),
        migrations.AlterField(
            model_name='charityprojects',
            name='Video',
            field=models.FileField(blank=True, null=True, upload_to='upload/projectVideo/'),
        ),
        migrations.AlterField(
            model_name='projectuserdetails',
            name='video',
            field=models.FileField(null=True, upload_to='InvitationVideo'),
        ),
    ]

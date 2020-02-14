# Generated by Django 2.2.8 on 2020-02-08 07:28

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myaccount', '0004_auto_20200208_0726'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myaccount',
            name='Mobile',
            field=models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+1xxxxxxxxxx'. Phone number should be 10 digits.", regex='^\\+?1?\\d{11-11}$')]),
        ),
    ]
# Generated by Django 2.2.8 on 2020-03-11 03:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('charityprojects', '0002_auto_20200309_1610'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinvitation',
            name='pu_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='charityprojects.ProjectUser'),
        ),
    ]

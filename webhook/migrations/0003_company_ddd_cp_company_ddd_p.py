# Generated by Django 4.2 on 2024-08-17 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webhook', '0002_remove_productattribute_um'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='ddd_cp',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
        migrations.AddField(
            model_name='company',
            name='ddd_p',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
    ]

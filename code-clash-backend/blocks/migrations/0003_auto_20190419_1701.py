# Generated by Django 2.0.10 on 2019-04-19 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blocks', '0002_auto_20190119_1632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='block',
            name='code',
            field=models.FileField(upload_to=''),
        ),
    ]
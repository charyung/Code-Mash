# Generated by Django 2.0.8 on 2019-01-13 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20180712_0417'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30, unique=True)),
                ('code', models.FileField(upload_to='')),
                ('votes', models.IntegerField()),
            ],
        ),
    ]

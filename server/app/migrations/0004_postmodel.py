# Generated by Django 5.0 on 2023-12-12 13:50

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_usermodel_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PostModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('author', models.CharField(max_length=128)),
                ('content', models.TextField()),
                ('views', models.DecimalField(decimal_places=2, default=0, max_digits=99)),
                ('up_votes', models.DecimalField(decimal_places=2, default=0, max_digits=99)),
                ('down_votes', models.DecimalField(decimal_places=2, default=0, max_digits=99)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'posts',
                'ordering': ['created_at'],
            },
        ),
    ]
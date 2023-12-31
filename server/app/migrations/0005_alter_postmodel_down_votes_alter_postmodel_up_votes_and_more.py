# Generated by Django 5.0 on 2023-12-12 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_postmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmodel',
            name='down_votes',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=99),
        ),
        migrations.AlterField(
            model_name='postmodel',
            name='up_votes',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=99),
        ),
        migrations.AlterField(
            model_name='postmodel',
            name='views',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=99),
        ),
    ]

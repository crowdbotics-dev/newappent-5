# Generated by Django 3.2.20 on 2023-09-06 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Frte',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gfhfj', models.BigIntegerField()),
            ],
        ),
    ]

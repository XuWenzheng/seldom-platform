# Generated by Django 4.0.6 on 2022-10-07 22:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_task', '0004_remove_testtask_env_testtask_env_id_testtask_team_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testtask',
            name='job_id',
        ),
    ]
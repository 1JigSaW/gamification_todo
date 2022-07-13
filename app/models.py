from django.db import models

class Purpose(models.Model):

    A = 'A'
    B = 'B'
    C = 'C'
    D = 'D'
    imp = [
        (A, 'Urgent and important'),
        (B, 'Not urgent and important'),
        (C, 'Urgent and not important'),
        (D, 'Not urgent and not important'),
    ]

    title = models.CharField(blank=False, max_length=500)
    start_date = models.DateField(blank=False, auto_now=True)
    end_date = models.DateField(blank=False)
    importance = models.CharField(choices=imp, default=D, max_length=2)

class Metrics(models.Model):
    title = models.CharField(blank=False, max_length=300)
    score = models.BigIntegerField()
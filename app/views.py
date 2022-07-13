from django.shortcuts import render
from app.models import Purpose, Metrics

def index(request):
	purposes = Purpose.objects.all()
	metrics = Metrics.objects.all()
	return render(request, 'index.html', {'purposes': purposes, 
		'metrics': metrics})

from django.http import HttpResponse
from django.shortcuts import render
from .forms import ExampleForm  # Agregar esta línea

def my_view(request):
    return HttpResponse("Hi world Django!")

def home_view(request):
    context = {'name': 'Keira'}
    return render(request, 'home.html', context)

def form_view(request):
    if request.method == 'POST':
        form = ExampleForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            return render(request, 'thanks.html', {'name': name, 'email': email})
    else:
        form = ExampleForm()
    return render(request, 'form.html', {'form': form})

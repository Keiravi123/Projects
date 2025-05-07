# blog/forms.py
from django import forms

class ExampleForm(forms.Form):
    name = forms.CharField(label='Camila', max_length=100)
    email = forms.EmailField(label='camilavial07@icloud.com')

from django.urls import path
from . import views #ponto = este mesmo diretório

urlpatterns = [
    path("", views.index, name="index"),
    path('<str:name>', views.greet, name='greet'),
    path("gabi", views.gabi, name="gabi"),
    path('camila', views.camila, name='camila')
]
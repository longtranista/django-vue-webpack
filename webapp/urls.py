from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),

    # Test api 
    url(r'^api/test', views.test_api, name='test_api'),
]


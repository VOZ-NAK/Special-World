from django.urls import path, include

urlpatterns = [
    path('auth/', include('children.auth.urls'), name='child_auth'),
]

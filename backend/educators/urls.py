from django.urls import path, include

urlpatterns = [
    path('auth/', include('educators.auth.urls'), name='educator_auth'),
]

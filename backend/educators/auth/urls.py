from django.urls import path
from .views import (
    EducatorLogoutView, EducatorRegistration,
    EducatorView, EducatorLoginView
)

urlpatterns = [
    path('register/', EducatorRegistration.as_view(), name='educator_register'),
    path('profile/', EducatorView.as_view(), name='educator_profile'),
    path('logout/', EducatorLogoutView.as_view(), name='educator_logout'),
    path('login/', EducatorLoginView.as_view(), name='educator_login'),
]

from django.urls import path
from .views import (
    ChildRegistration, ChildView,
    ChildLoginView, ChildLogoutView
)

urlpatterns = [
    path('register/', ChildRegistration.as_view(), name='child_register'),
    path('profile/', ChildView.as_view(), name='child_profile'),
    path('logout/', ChildLogoutView.as_view(), name='child_logout'),
    path('login/', ChildLoginView.as_view(), name='child_login'),
]

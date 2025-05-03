from rest_framework.permissions import BasePermission

class IsEducator(BasePermission):
    def has_permission(self, request, view):
        return hasattr(request.user, 'educatorprofile')

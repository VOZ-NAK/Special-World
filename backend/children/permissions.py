from rest_framework.permissions import BasePermission

class IsChild(BasePermission):
    def has_permission(self, request, view):
        return hasattr(request.user, 'childprofile')

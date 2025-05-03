from rest_framework import generics, permissions
from .serializers import ChildRegistrationSerializer, ChildSerializer
from children.permissions import IsChild
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken


class ChildRegistration(generics.CreateAPIView):
    """
    Создает новую учетную запись пользователя для ребенка.
    передайте адрес электронной почты в качестве имени `username`
    """
    serializer_class = ChildRegistrationSerializer
    permission_classes = [permissions.AllowAny]

class ChildView(generics.RetrieveUpdateAPIView):
    serializer_class = ChildSerializer
    permission_classes = [permissions.IsAuthenticated, IsChild]

    def get_object(self):
        return self.request.user.childprofile

class ChildLoginView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request}
        )

        if serializer and serializer.is_valid(raise_exception=True):
            user = serializer.validated_data.get('user', None)
            token, _ = Token.objects.get_or_create(user=user)
            if hasattr(user, 'childprofile'):
                return Response({
                    'token': token.key,
                    'role': 'child'
                }, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ChildLogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

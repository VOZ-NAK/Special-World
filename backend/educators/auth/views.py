from rest_framework import generics, permissions
from .serializers import EducatorRegistrationSerializer, EducatorSerializer
from educators.permissions import IsEducator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class EducatorRegistration(generics.CreateAPIView):
    serializer_class = EducatorRegistrationSerializer
    permission_classes = [permissions.AllowAny]

class EducatorView(generics.RetrieveUpdateAPIView):
    serializer_class = EducatorSerializer
    permission_classes = [permissions.IsAuthenticated, IsEducator]

    def get_object(self):
        return self.request.user.educatorprofile

class EducatorLoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request}
        )

        if serializer and serializer.is_valid(raise_exception=True):
            user = serializer.validated_data.get('user', None)
            token, created = Token.objects.get_or_create(user=user)
            if hasattr(user, 'educatorprofile'):
                return Response({
                    'token': token.key,
                    'role': 'educator'
                }, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class EducatorLogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

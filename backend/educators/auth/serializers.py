from rest_framework import serializers
from educators.models import Educator
from django.contrib.auth.models import User

class EducatorRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # profile_data = {
        #     'role': validated_data.pop('role'),
        #     'city': validated_data.pop('city'),
        #     'date_of_birth': validated_data.pop('date_of_birth')
        # }
        user = User.objects.create_user(**validated_data)
        Educator.objects.create(user=user)
        return user

class EducatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Educator
        fields = '__all__'

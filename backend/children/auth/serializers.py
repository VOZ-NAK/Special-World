from rest_framework import serializers
from children.models import Child
from django.contrib.auth.models import User
from datetime import date

class ChildRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # profile_data = {
        #     'gender': validated_data.pop('gender'),
        #     'city': validated_data.pop('city'),
        #     'date_of_birth': validated_data.pop('date_of_birth')
        # }
        user = User.objects.create_user(**validated_data)
        Child.objects.create(user=user)
        return user


class ChildSerializer(serializers.ModelSerializer):
    age = serializers.SerializerMethodField()

    class Meta:
        model = Child
        fields = '__all__'

    def get_age(self, obj):
        today = date.today()
        return today.year - obj.date_of_birth.year - ((today.month, today.day) < (obj.date_of_birth.month, obj.date_of_birth.day))

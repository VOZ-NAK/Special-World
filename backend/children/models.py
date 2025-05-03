from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.

class Child(models.Model):
    GENDER_CHOICES = [
        ('M', 'Мужской'),
        ('F', 'Женский'),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='childprofile')
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='M')
    city = models.CharField(max_length=100, null=True, blank=True)
    disability = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if not self.user:
            return 'Unknown'
        if self.user.first_name and self.user.last_name:
            return self.user.first_name + ' ' + self.user.last_name
        return self.user.username

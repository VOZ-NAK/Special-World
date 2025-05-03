from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.

class Educator(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='educatorprofile')
    role = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)

    def __str__(self):
        if not self.user:
            return 'Unknown'
        if self.user.first_name and self.user.last_name:
            return self.user.first_name + ' ' + self.user.last_name
        return self.user.username

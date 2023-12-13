import uuid
import json
from django.db import models


class PostModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=128)
    content = models.TextField()
    views = models.TextField(default="[]")
    up_votes = models.TextField(default="[]")
    down_votes = models.TextField(default="[]")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'posts'
        ordering = ['created_at']

    def get_up_votes(self):
        try:
            return json.loads(self.up_votes)
        except:
            return []

    def set_up_votes(self, votes_list):
        self.up_votes = json.dumps(votes_list)

    def get_down_votes(self):
        return json.loads(self.down_votes)

    def set_down_votes(self, votes_list):
        self.down_votes = json.dumps(votes_list)

    def get_views(self):
        return json.loads(self.views)

    def set_views(self, views_list):
        self.views = json.dumps(views_list)
from django.urls import path
from app.views.user import RegisterView, LoginView, TokenView
from app.views.post import PostView, PostUpdate

urlpatterns = [
    # user auth routes
    path("user/login/", LoginView.as_view()),
    path("user/register/", RegisterView.as_view()),
    path("user/token/", TokenView.as_view()),

    # post view routes
    path("post/", PostView.as_view()),
    path("post/update/", PostUpdate.as_view())
]

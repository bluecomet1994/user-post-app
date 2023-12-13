from django.core import serializers
from rest_framework import generics, status
from rest_framework.response import Response

from app.models.user import UserModel, generate_token, get_user_from_token
from app.serializers.userSerializer import UserSerializer, RegisterSerializer, LoginSerializer


# register user
class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):
            user_account = serializer.save()
            user = serializers.serialize("python", [user_account])[0]["fields"]
            
            return Response({
                "success": True,
                "message": "Successfully registered!",
                "user": user
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "success": False,
                "error": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)


# login user
class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):
            checked_user = serializer.check_user()
            token = generate_token(checked_user, "puzzle", 3600)
            user = serializers.serialize("python", [checked_user])[0]["fields"]
            
            return Response({
                "success": True,
                "message": "Welcome back!",
                "user": user,
                "token": token,
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "success": False,
                "error": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)


# get user info from JWT token
class TokenView(generics.GenericAPIView):
    serializer_class = UserSerializer

    def get(self, request):
        header = request.META.get("HTTP_AUTHORIZATION")
        token = header.split()[1] if header else None
        decoded_user = get_user_from_token(token, "puzzle")

        if decoded_user == None:
            return Response({
                "success": False,
                "message": "Token is invalid."
            }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            user = UserModel.objects.filter(email=decoded_user.email)
            user_data = serializers.serialize("python", [decoded_user])[0]["fields"]
            
            if user.exists() == True:
                return Response({
                    "success": True,
                    "message": "Token is valid.",
                    "user": {
                        "name": user_data["name"],
                        "email": user_data["email"],
                        "created_at": user_data["created_at"],
                    },
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    "success": False,
                    "message": "Token is invalid."
                }, status=status.HTTP_401_UNAUTHORIZED)

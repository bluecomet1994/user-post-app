import math
from django.core import serializers
from rest_framework import generics, status
from rest_framework.response import Response

from app.models.post import PostModel
from app.serializers.postSerializer import PostSerializer

class PostView(generics.GenericAPIView):
    serializer_class = PostSerializer

    def get_post_by_pk(self, pk):
        try:
            return PostModel.objects.get(pk=pk)
        except:
            return None

    def get(self, request):
        id = request.GET.get("id")

        if id == None:
            page_param = int(request.GET.get("page", 1))
            limit_param = int(request.GET.get("limit", 10))
            search_param = request.GET.get("search")
            start_num = (page_param - 1) * limit_param
            end_num = page_param * limit_param
            posts = PostModel.objects.all()
            total_posts = posts.count()

            if search_param:
                posts = posts.filter(name__icontains=search_param)
            serializer = self.serializer_class(posts[start_num:end_num], many=True)

            return Response({
                "success": True,
                "total": total_posts,
                "current_page": page_param,
                "last_page": math.ceil(total_posts / limit_param),
                "list": serializer.data,
            }, status=status.HTTP_200_OK)
        else:
            post = self.get_post_by_pk(id)

            if post == None:
                return Response({
                    "success": False,
                    "message": "Cannot find the post by ID."
                }, status=status.HTTP_404_NOT_FOUND)
            else:
                json_post = serializers.serialize("python", [post])[0]["fields"]

                return Response({
                    "success": True,
                    "post": json_post
                })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({
                "success": True,
                "message": "The post has been created.",
                "post": serializer.data,
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "success": False,
                "error": serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        

class PostUpdate(generics.GenericAPIView):
    serializer_class = PostSerializer

    def get_post_by_pk(self, pk):
        try:
            return PostModel.objects.get(pk=pk)
        except:
            return None

    def put(self, request):
        id = request.GET.get("id")
        type = request.data["type"]
        email = request.data["email"]

        post = self.get_post_by_pk(id)
        
        if post == None:
            return Response({
                "success": False,
                "message": "Cannot find the post by ID."
            }, status=status.HTTP_404_NOT_FOUND)
        else:
            if type == "UPVOTE":
                up_votes = post.get_up_votes() or []
                
                if email in up_votes:
                    return Response({
                        "success": False,
                        "message": "You've already voted the post."
                    })
                else:
                    up_votes.append(email)
                    post.set_up_votes(up_votes)
                    post.save()
                    return Response({
                        "success": True,
                        "message": "You've successfully voted the post!"
                    })
            elif type == "DOWNVOTE":
                down_votes = post.get_down_votes() or []
                
                if email in down_votes:
                    return Response({
                        "success": False,
                        "message": "You've already downvoted the post."
                    })
                else:
                    down_votes.append(email)
                    post.set_down_votes(down_votes)
                    post.save()
                    return Response({
                        "success": True,
                        "message": "You've successfully unvoted the post!"
                    })
            else:
                views = post.get_views() or []
                
                if email in views:
                    return Response({
                        "success": False,
                        "message": "You've already viewed the post."
                    })
                else:
                    views.append(email)
                    post.set_views(views)
                    post.save()
                    return Response({
                        "success": True,
                        "message": "You've viewed the post!"
                    })
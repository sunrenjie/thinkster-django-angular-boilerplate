from rest_framework import permissions

class IsAuthorOfPost(permissions.BasePermission):
    def has_object_permission(self, request, view, post):
        return post.author == request.user if request.user else False

from django.shortcuts import render
from rest_framework import generics

from .models import *
from .serializers import *


# =========================
# HOME
# =========================
class HomeListView(generics.ListAPIView):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


# =========================
# ABOUT
# =========================
class AboutListView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


# =========================
# TECHNICAL SKILLS
# =========================
class TechnicalSkillListView(generics.ListAPIView):
    queryset = TechnicalSkill.objects.all()
    serializer_class = TechnicalSkillSerializer


# =========================
# TOOLS
# =========================
class ToolListView(generics.ListAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer


# =========================
# EXPERIENCE
# =========================
class ExperienceListView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


# =========================
# PROJECTS
# =========================
class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# =========================
# 🚀 BACKEND HTML DASHBOARD (NEW)
# =========================
def dashboard(request):

    context = {
        "home": Home.objects.count(),
        "about": About.objects.count(),
        "technical_skills": TechnicalSkill.objects.count(),
        "tools": Tool.objects.count(),
        "experience": Experience.objects.count(),
        "projects": Project.objects.count(),
    }

    return render(request, "dashboard.html", context)
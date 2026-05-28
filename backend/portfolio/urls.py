from django.urls import path
from .views import (
    HomeListView,
    AboutListView,
    TechnicalSkillListView,
    ToolListView,
    ExperienceListView,
    ProjectListView,
    dashboard
)

urlpatterns = [
    path("home/", HomeListView.as_view()),
    path("about/", AboutListView.as_view()),
    path("skills/", TechnicalSkillListView.as_view()),
    path("tools/", ToolListView.as_view()),
    path("experience/", ExperienceListView.as_view()),
    path("projects/", ProjectListView.as_view()),

    # 🚀 HTML DASHBOARD
    path("dashboard/", dashboard),
]
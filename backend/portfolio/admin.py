from django.contrib import admin
from .models import *


# =========================
# HOME
# =========================
@admin.register(Home)
class HomeAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


# =========================
# ABOUT
# =========================
@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ("id", "career", "location", "email")
    search_fields = ("career", "location")


# =========================
# TECHNICAL SKILLS
# =========================
@admin.register(TechnicalSkill)
class TechnicalSkillAdmin(admin.ModelAdmin):
    list_display = ("id", "skill_name", "level")
    search_fields = ("skill_name",)
    list_filter = ("level",)


# =========================
# TOOLS
# =========================
@admin.register(Tool)
class ToolAdmin(admin.ModelAdmin):
    list_display = ("id", "tool_name")
    search_fields = ("tool_name",)


# =========================
# EXPERIENCE
# =========================
@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "start_time", "end_time")
    search_fields = ("title",)
    list_filter = ("start_time",)


# =========================
# PROJECTS
# =========================
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "github_link")
    search_fields = ("name",)
    filter_horizontal = ("tools",)
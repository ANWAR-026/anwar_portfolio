from django.db import models


class Home(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    home_image = models.ImageField(upload_to='home/')
    cv_download = models.FileField(upload_to='cv/')

    def __str__(self):
        return self.name


class About(models.Model):
    about_bio = models.TextField()
    about_image = models.ImageField(upload_to='about/')
    location = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    career = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.career


class TechnicalSkill(models.Model):
    skill_name = models.CharField(max_length=100)
    level = models.IntegerField(help_text="Percentage level")

    def __str__(self):
        return self.skill_name


class Tool(models.Model):
    tool_name = models.CharField(max_length=100)

    def __str__(self):
        return self.tool_name


class Experience(models.Model):
    title = models.CharField(max_length=200)
    start_time = models.DateField()
    end_time = models.DateField(null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return self.title


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    tools = models.ManyToManyField(Tool)
    github_link = models.URLField()

    def __str__(self):
        return self.name
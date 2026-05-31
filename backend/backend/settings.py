from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get(
    "SECRET_KEY",
    "django-insecure-awo03hj^474gh_c^(%ad+!#e!*-)gyx-$*@q2@a0lznrxc38sy"
)

DEBUG = False

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    ".onrender.com",
]

INSTALLED_APPS = [
    "jazzmin",

    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "corsheaders",
    "rest_framework",

    "portfolio",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",

    # IMPORTANT
    "whitenoise.middleware.WhiteNoiseMiddleware",

    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",

    "corsheaders.middleware.CorsMiddleware",
]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True
USE_TZ = True

# =========================
# STATIC FILES
# =========================

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

STATICFILES_STORAGE = (
    "whitenoise.storage.CompressedManifestStaticFilesStorage"
)

# =========================
# MEDIA FILES
# =========================

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

CORS_ALLOW_ALL_ORIGINS = True

# =========================
# JAZZMIN
# =========================

JAZZMIN_SETTINGS = {
    "site_title": "Anwar Admin",
    "site_header": "Anwar Portfolio Admin",
    "site_brand": "ANWAR",
    "welcome_sign": "Welcome to Anwar Portfolio Dashboard",
    "copyright": "Anwar Suleiman",

    "search_model": [
        "auth.User",
        "portfolio.Project",
    ],

    "show_sidebar": True,
    "navigation_expanded": True,

    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "portfolio.Project": "fas fa-code",
        "portfolio.Experience": "fas fa-briefcase",
        "portfolio.TechnicalSkill": "fas fa-laptop-code",
        "portfolio.Tool": "fas fa-tools",
        "portfolio.About": "fas fa-user-circle",
        "portfolio.Home": "fas fa-home",
    },

    "related_modal_active": True,
}
import secrets
from dotenv import load_dotenv
import os
from typing import List, Union

# Load environment variables from .env file
load_dotenv()

def parse_cors(v: Union[str, List[str]]) -> List[str]:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, (list, str)):
        return v
    raise ValueError(v)

class Settings:
    def __init__(self):
        # Default values can be provided here, or loaded from environment variables
        self.API_V1_STR: str = '/api/v1'
        self.SECRET_KEY: str = os.getenv("SECRET_KEY", secrets.token_urlsafe(32))
        self.ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
        self.FRONTEND_HOST: str = os.getenv("FRONTEND_HOST", "http://localhost:3000")
        self.ENVIRONMENT: str = os.getenv("ENVIRONMENT", "local")
        
        # Parse CORS origins
        self.BACKEND_CORS_ORIGINS: Union[List[str], str] = parse_cors(os.getenv("BACKEND_CORS_ORIGINS", "").split(","))
        
        # Additional environment variables
        self.PROJECT_NAME: str = os.getenv("PROJECT_NAME", "My Project")
        self.POSTGRES_SERVER: str = os.getenv("POSTGRES_SERVER", "")
        self.POSTGRES_PORT: int = int(os.getenv("POSTGRES_PORT", 5432))
        self.POSTGRES_USER: str = os.getenv("POSTGRES_USER", "")
        self.POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD", "")
        self.POSTGRES_DB: str = os.getenv("POSTGRES_DB", "")

    @property
    def all_cors_origins(self) -> List[str]:
        # Ensure that origins are formatted properly
        return [str(origin).rstrip("/") for origin in self.BACKEND_CORS_ORIGINS] + [self.FRONTEND_HOST]

# Initialize settings
settings = Settings()

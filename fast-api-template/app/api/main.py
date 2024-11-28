from fastapi import APIRouter
from app.api.routes import uploadFile
api_router = APIRouter()

@api_router.get('/health-check')
def health_check():
    return "Ok"

api_router.include_router(uploadFile.router,prefix='/uploads',tags=['uploads'])


from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()

@router.get('/health-check')
def health_check():
    return {'data':'OK'}
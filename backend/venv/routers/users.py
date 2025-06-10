from fastapi import APIRouter

router = APIRouter(prefix="/users")

@router.get("/")
def get_users():
    return [{"id": 1, "name": "Sample User"}]
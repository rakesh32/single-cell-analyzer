
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: EmailStr
    is_active: bool = True
    full_name: str | None

class UserRegister(UserBase):
    password: str

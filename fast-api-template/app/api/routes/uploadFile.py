import json
import random
from fastapi import APIRouter,UploadFile,File
from pydantic import BaseModel
from pathlib import Path

router = APIRouter()


@router.post('/json')
async def uploadJson(file:UploadFile=File(...)):
    # List of available JSON file paths
    json_files = [
        Path("app/static/data/adata_c.json"),
        Path("app/static/data/adata_cc.json"),
    ]
    
    # Randomly choose one file
    selected_file = random.choice(json_files)
    
    # Load the data from the selected file
    with selected_file.open("r") as file:
        clustering_data = json.load(file)
    
    # Return the data as a response
    return {
        "selected_file": selected_file.name,  # Return the file name for reference
        "data": clustering_data
    }
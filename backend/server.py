from fastapi import Request,HTTPException,FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from pathlib import Path
app = FastAPI()

current_file = Path(__file__)
current_file_dir = current_file.parent
project_root = current_file_dir.parent
project_root_absolute = project_root.resolve()
static_root_absolute = project_root_absolute / "static"


app.mount("/static", StaticFiles(directory=static_root_absolute), name="static")



@app.get('/')
def be():
    return FileResponse('../static/index.html')




if __name__ == "__main__":
     uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)

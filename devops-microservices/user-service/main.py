from fastapi import FastAPI

app = FastAPI()

@app.get("/users/{id}")
def get_user(id: int):
    return {"id": id, "name": "test"}

@app.put("/users/{id}")
def update_user(id: int):
    return {"status": "updated"}

@app.get("/health")
def health():
    return {"status": "ok"}
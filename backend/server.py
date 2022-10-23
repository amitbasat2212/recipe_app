from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import requests;
import consts;
from pathlib import Path
from DataBase import queries;
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

def get_recipes_from_api(ingredient):
    recpies_by_ingrident = requests.get(consts.get_url_recpies_by_ingrident(ingredient))
    recipes_by_ingrident=recpies_by_ingrident.json()["results"]
    return recipes_by_ingrident;

@app.get('/recipes/{ingredient}')
def relvent_recipes_by_ingrident():
   
    try:
       recipes_by_ingrident=get_recipes_from_api(ingredient)      
       return recipes_by_ingrident 
    except TypeError as e:
        return e;   



def adding_items_to_list_by_param(result,param):
    list_of_item_to_return=[];          
    for item in result:
        list_of_item_to_return.append(item[param])               
    return list_of_item_to_return;       


def find_if_sensitivite_in_ingridents(recipe,the_ingeidents_with_sensitivety):
    is_in_or_not=False;
    for ingredient in recipe:
        if(ingredient in the_ingeidents_with_sensitivety):
              is_in_or_not=True;
                

    return is_in_or_not;   

@app.get('/recipes/')
def filter_recipes_by_sensitivity(sensitivity,ingredient):
    try:
       the_recipes_without_sensitivite=[];

       recipes_by_ingrident=get_recipes_from_api(ingredient)
       the_ingeidents_with_sensitivety=adding_items_to_list_by_param(queries.find_the_recipes_by_sensitivity(sensitivity),"ingredient_name");
       
       for recipe in recipes_by_ingrident:
        if(not(find_if_sensitivite_in_ingridents(recipe["ingredients"],the_ingeidents_with_sensitivety))):
                the_recipes_without_sensitivite.append(recipe);
       
       return the_recipes_without_sensitivite;
    except TypeError as e:
        return e;   


if __name__ == "__main__":
     uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)

from multiprocessing import connection
from DataBase import dataBaseManager;



def find_the_recipes_by_sensitivity(sensitivity):
    try:
        with dataBaseManager.connection.cursor() as cursor:
            query_recipes_by_sensitivity= f"SELECT * FROM ingredients WHERE type_ingrident='{sensitivity}';"
            cursor.execute(query_recipes_by_sensitivity)        
            result_recepies = cursor.fetchall()
            return result_recepies;
    except TypeError as e:
        return e;

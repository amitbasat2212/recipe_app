class Model{

    async requestToRecipe(ingredinet:String,param:String){
        const urlGetRecipes = `/recipes/?sensitivity=${param}&ingredient=${ingredinet}`;                  
        const recipesJson= await $.get(urlGetRecipes)                    
        const recipes:Promise<Resepics[]> = this.createRecipes(recipesJson);   
        return recipes;
    }

    async getRecipes(ingredinet:String,diary:boolean,gluten:boolean):Promise<Resepics [] | Object> {                                 
       
        try{   
            const urlGetRecipes = `/recipes/${ingredinet}`;                  
            const recipesJson= await $.get(urlGetRecipes)                    
            let recipes:any = this.createRecipes(recipesJson);            
            if(gluten){           
               recipes=  await this.requestToRecipe(ingredinet,"gluten") ;               
                return recipes;    
            } else if (diary){
                recipes=  await this.requestToRecipe(ingredinet,"dairy")                
                        
                return recipes;
            }
            return recipes;    
        } catch(err){
            return {err:err}
        }  
        
    }
    async createRecipes(getRecpies:any):Promise<Resepics[]>{
        const resepics:Resepics[]=[];             
            getRecpies.forEach((element:any) => {  
                resepics.push(new Resepics(element.ingredients,element.title,element.thumbnail,element.href))
            });
            
       
        return resepics; 
    }

    
    
}
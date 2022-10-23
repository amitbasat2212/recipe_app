class Model{

    async getRecipes(ingredinet:String):Promise<Resepics [] | Object> {                                 
        let recipes;        
        try{
                const urlGetDreamTeam = `/recipes/${ingredinet}`;                  
                recipes= await $.get(urlGetDreamTeam)                    
                const players:Promise<Resepics[]> = this.createRecipes(recipes);               
                return players;             
        } catch(err){
            return {err:err}
        }  
        
    }
    async createRecipes(getRecpies:any):Promise<Resepics[]>{
        const Players:Resepics[]=[];             
            getRecpies.forEach((element:any) => {  
                Players.push(new Resepics(element.ingredients,element.title,element.thumbnail,element.href))
            });
            
       
        return Players; 
    }
    
}
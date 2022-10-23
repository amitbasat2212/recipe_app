const ModelSinglton =new Model();
const RenderSinglton = new Render();

const ingrident = document.querySelector('#ingrident_input') as HTMLInputElement;

async function getRecipes(){
        const recipes= await ModelSinglton.getRecipes(ingrident.value); 
        console.log(recipes)
        if(!Array.isArray(recipes)){
            RenderSinglton.RenderEmptyRecipes();
            $("#projectIDSelectError").html("there is an error in your ingrident").addClass("error-msg"); 
        

        }else{       
            RenderSinglton.RenderTheRecipes(recipes)
        }
}
$('#search').on('click',function(){    
    getRecipes();
    
});
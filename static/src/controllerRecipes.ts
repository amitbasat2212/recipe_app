const ModelSinglton =new Model();
const RenderSinglton = new Render();

const ingrident = document.querySelector('#ingrident_input') as HTMLInputElement;
const gluten = document.querySelector('#gluten')  as HTMLInputElement | null;;
const diary = document.querySelector('#diary')  as HTMLInputElement | null;;
async function getRecipes(gluten:any,diary:any){
        const recipes= await ModelSinglton.getRecipes(ingrident.value,gluten,diary); 
        console.log(recipes)
        if(!Array.isArray(recipes)){
            RenderSinglton.RenderEmptyRecipes();
            $("#projectIDSelectError").html("there is an error in your ingrident").addClass("error-msg"); 
        

        }else{       
            RenderSinglton.RenderTheRecipes(recipes)
        }
}
$('#search').on('click',function(){
    getRecipes(gluten?.checked,diary?.checked);
    
});




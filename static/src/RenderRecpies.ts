class Render{ 
    RenderEmptyRecipes(){
        $('#row_container').empty();
    }
    
    RenderTheRecipes(Resepics:Resepics |Object){
    this.RenderEmptyRecipes();
    const source = $('#recipes_tamplate').html();
    const template = Handlebars.compile(source)
    const newHTML = template({results:Resepics})                
    $('#row_container').append(newHTML)
}
}
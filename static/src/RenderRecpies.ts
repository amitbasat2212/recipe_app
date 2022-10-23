class Render{ 
    RenderEmptyRecipes(){
        $('#row_container').empty();
    }
    
    RenderTheRecipes(Resepics:Resepics |Object){
    this.RenderEmptyRecipes();
    const source = $('#playerstatus_tamplate').html();
    const template = Handlebars.compile(source)
    const newHTML = template({status:Resepics})                
    $('#row_status_container').append(newHTML)
}
}
"use strict";
class Render {
    RenderEmptyRecipes() {
        $('#row_container').empty();
    }
    RenderTheRecipes(Resepics) {
        this.RenderEmptyRecipes();
        const source = $('#playerstatus_tamplate').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ status: PlayerStatus });
        $('#row_status_container').append(newHTML);
    }
}

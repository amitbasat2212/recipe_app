"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ModelSinglton = new Model();
const RenderSinglton = new Render();
const ingrident = document.querySelector('#ingrident_input');
function getRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const recipes = yield ModelSinglton.getRecipes(ingrident.value);
        console.log(recipes);
        if (!Array.isArray(recipes)) {
            RenderSinglton.RenderEmptyRecipes();
            $("#projectIDSelectError").html("there is an error in your ingrident").addClass("error-msg");
        }
        else {
            RenderSinglton.RenderTheRecipes(recipes);
        }
    });
}
$('#search').on('click', function () {
    getRecipes();
});

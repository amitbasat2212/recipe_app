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
class Model {
    requestToRecipe(ingredinet, param) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlGetRecipes = `/recipes/?sensitivity=${param}&ingredient=${ingredinet}`;
            const recipesJson = yield $.get(urlGetRecipes);
            const recipes = this.createRecipes(recipesJson);
            return recipes;
        });
    }
    getRecipes(ingredinet, diary, gluten) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const urlGetRecipes = `/recipes/${ingredinet}`;
                const recipesJson = yield $.get(urlGetRecipes);
                let recipes = this.createRecipes(recipesJson);
                if (gluten) {
                    recipes = yield this.requestToRecipe(ingredinet, "gluten");
                    return recipes;
                }
                else if (diary) {
                    recipes = yield this.requestToRecipe(ingredinet, "dairy");
                    return recipes;
                }
                return recipes;
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    createRecipes(getRecpies) {
        return __awaiter(this, void 0, void 0, function* () {
            const resepics = [];
            getRecpies.forEach((element) => {
                resepics.push(new Resepics(element.ingredients, element.title, element.thumbnail, element.href));
            });
            return resepics;
        });
    }
}

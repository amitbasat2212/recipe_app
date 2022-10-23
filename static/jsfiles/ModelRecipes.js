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
    getRecipes(ingredinet) {
        return __awaiter(this, void 0, void 0, function* () {
            let recipes;
            try {
                const urlGetDreamTeam = `/recipes/${ingredinet}`;
                recipes = yield $.get(urlGetDreamTeam);
                const players = this.createRecipes(recipes);
                return players;
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    createRecipes(getRecpies) {
        return __awaiter(this, void 0, void 0, function* () {
            const Players = [];
            getRecpies.forEach((element) => {
                Players.push(new Resepics(element.ingredients, element.title, element.thumbnail, element.href));
            });
            return Players;
        });
    }
}

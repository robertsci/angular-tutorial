import {Recipe} from "./recipe.model";

export class RecipeService {

  private _recipes: Recipe[] = [
    new Recipe("CheeseCake",
      "cookie with cheese",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_1064/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646"),
    new Recipe("CheeseCake 2",
      "cookie with cheeseeeeeeeeeeeeeeee",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_1064/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646")

  ];

  get getRecipes(): Recipe[] {
    return this._recipes.slice();
  }
}

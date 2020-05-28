import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private _recipes: Recipe[] = [
  //   new Recipe("CheeseCake",
  //     "cookie with cheese",
  //     "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_1064/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646",
  //     [new Ingredient("Cheese", 1), new Ingredient("Visine", 1)] ),
  //   new Recipe("CarrotCake 2",
  //     "cookie with cheeseeeeeeeeeeeeeeee",
  //     "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_1064/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646",
  //     [new Ingredient("Carrots", 5), new Ingredient("Blat", 4)] )
  //
  // ];

  private _recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this._recipes = recipes;
    this.recipesChanged.next(this._recipes.slice());
  }

  get getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipe(id: number) {
    return this._recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes.slice())
  }

  updateRecipe(index: number,recipe: Recipe) {
    this._recipes[index] = recipe;
    this.recipesChanged.next(this._recipes.slice())
  }

  deleteRecipe(index: number) {
    this._recipes.splice(index, 1);
    this.recipesChanged.next(this._recipes.slice());
  }
}

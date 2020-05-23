import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private _ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  get getIngredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
}

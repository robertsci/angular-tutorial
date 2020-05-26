import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  subscription = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private _ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  get getIngredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  getIngredient(index: number) {
    return this._ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.subscription.next(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.subscription.next(this._ingredients.slice());
  }
}

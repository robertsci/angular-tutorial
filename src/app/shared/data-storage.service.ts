import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable({providedIn: 'root'}) // used when you inject a service into another service. Here we inject the HttpService
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {

  }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes;
    console.log("Recipes to Save: ");
    console.log(recipes);
    this.httpClient.put(
      'https://angular-first-project-97484.firebaseio.com/recipes.json',
      recipes)
      .subscribe(
        response => {
          console.log(response);
        });
  }

  fetchRecipes() {
    this.httpClient.
    get<Recipe[]>('https://angular-first-project-97484.firebaseio.com/recipes.json')
      .subscribe( recipes => {
      this.recipeService.setRecipes(recipes);
    })
  }

}

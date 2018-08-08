import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/Shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipesService {

  reciepChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('burguer',
      'this is a sample teste',
      'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3DN9u99OOY&w=800&q=85',
      [new Ingredients('Meat', 1), new Ingredients('Fries',10)]),
    new Recipe(
      'A teste receipe2',
      'this is a sample teste2',
      'http://www2.uol.com.br/vivermente/noticias/img/a_intima_relacao_entre_comida_e_humor_1__2016-05-09175545.jpg',
      [
        new Ingredients('massa', 10),
        new Ingredients('tomatoes', 5)
      ])
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.reciepChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  onAddIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  constructor(private shoppingListService: ShoppingListService) {}

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.reciepChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.reciepChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.reciepChanged.next(this.recipes.slice());
  }

}

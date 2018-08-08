import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  stardedEditing = new Subject<number>();
  private ingredients: Ingredients[] = [
    new  Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10)
  ];

 getIngredients() {
   return this.ingredients.slice();
 }

 onAddedIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(ingredients.slice());
  }

  getIngredient(index) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
   this.ingredients.splice(index, 1);
   this.ingredientsChanged.next(this.ingredients.slice());
  }
 }

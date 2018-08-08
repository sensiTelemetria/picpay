import {Ingredients} from '../shared/ingredients.model';

export class Recipe {
  public name: string;
  public descripition: string;
  public imagePath: string;
  public ingredients: Ingredients[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]){
    this.descripition = desc;
    this.name = name;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

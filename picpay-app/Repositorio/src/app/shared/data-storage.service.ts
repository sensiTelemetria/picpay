import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import {Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthServiceService} from '../auth/auth-service.service';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private auth: AuthServiceService,
              private recipeService: RecipesService) {}

  storeRecipes() {
    const token = this.auth.getToken();
    return this.http.put(
      'https://udemyangular-718e5.firebaseio.com/recipes.json'
      , this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token )
      });
  }
  getRecipes() {

    const token = this.auth.getToken();
    this.http.get<Recipe[]>('https://udemyangular-718e5.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
           this.recipeService.setRecipes(recipes);
        }
      );
  }
}


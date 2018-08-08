import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipesDetailComponent,
    RecipesEditComponent,
    RecipesListComponent,
    RecipesItemComponent,
  ],
  imports: [
     ReactiveFormsModule,
     CommonModule,
     RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {

}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';


const recipesRoutes: Routes = [
   {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent },
      {path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipesDetailComponent},
      {path: ':id/edit', component: RecipesEditComponent, canActivate: [AuthGuard]}
    ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/Shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipesService} from './recipes/recipes.service';
import {DataStorageService} from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthServiceService} from './auth/auth-service.service';
import {AuthGuard} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SHARED_FORM_DIRECTIVES} from '@angular/forms/src/directives';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    RecipesModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [ShoppingListService, RecipesService, DataStorageService, AuthServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

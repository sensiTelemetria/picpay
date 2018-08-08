import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../Shopping-list.service';
import {createViewChild} from '@angular/compiler/src/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  private subs: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subs = this.shoppingListService.stardedEditing.
    subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });

      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onAddItem(form: NgForm) {
    const  newIngredient = new Ingredients(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
    this.shoppingListService.onAddedIngredient(newIngredient);
  }
  this.editMode = false;
  form.reset();
  }


}

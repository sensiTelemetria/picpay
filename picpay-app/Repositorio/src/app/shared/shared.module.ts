import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
  ],
  exports: [
    //add common module
    DropdownDirective,
  ]


})
export class SharedModule {}

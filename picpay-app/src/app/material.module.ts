import { NgModule } from '@angular/core';

import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class MaterialModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { PessoasItemComponent } from './pessoas/pessoas-list/pessoas-item/pessoas-item.component';
import {DataService} from './pessoas/data-server.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogComponent } from './pessoas/pessoas-list/dialog/dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogBoxService} from './pessoas/pessoas-list/dialog-box.service';
import { NovoCartaoComponent } from './pessoas/pessoas-list/novo-cartao/novo-cartao.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardsListComponent } from './pessoas/pessoas-list/cards-list/cards-list.component';
import { FinishPaymentComponent } from './pessoas/pessoas-list/finish-payment/finish-payment.component';
import {MaterialModule} from './material.module';
import {MatIconModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    PessoasItemComponent,
    DialogComponent,
    NovoCartaoComponent,
    CardsListComponent,
    FinishPaymentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DataService, DialogBoxService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

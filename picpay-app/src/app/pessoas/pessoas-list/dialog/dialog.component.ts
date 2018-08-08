import {Component, OnInit, Input, Output, OnChanges, EventEmitter, OnDestroy} from '@angular/core';
import { NgModule } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {DialogBoxService} from '../dialog-box.service';
import {Pessoas} from '../../pessoas.model';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreditCard} from '../../credit-card/credit-card.model';
import {DataStorageService} from '../../../../../Repositorio/src/app/shared/data-storage.service';
import {DataService} from '../../data-server.service';
// https://stackblitz.com/edit/angular-ksz4ml?file=src%2Fapp%2Fapp.component.html
// https://regexr.com/3g7p4


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  pessoa: Pessoas;
  subs: Subscription;
  subsCreditCards: Subscription;
  subsIndex: Subscription;
  pagamentoForm: FormGroup;
  creditCards: CreditCard[];
  selectedCard: CreditCard;
  selectedCardIndex: number;

  constructor(private dialogBoxService: DialogBoxService, private dataServer: DataService) {
    this.creditCards = [];
    this.selectedCard = null;
  }

  ngOnInit() {
    this.subsIndex = this.dialogBoxService.cardIndex.subscribe(
     (selectedCardIndex: number) => {
       this.selectedCardIndex = selectedCardIndex;
       this.selectedCard = this.creditCards[this.selectedCardIndex];
       this.initform();
     }
   );
   this.subs = this.dialogBoxService.pessoa.subscribe(
     (pessoa: Pessoas) => {
       this.pessoa = pessoa;
       this.initform();
     }
   );

   this.subsCreditCards = this.dialogBoxService.changedCreditCards.subscribe(
     (creditCards: CreditCard[]) => {
      this.creditCards = creditCards;
     }
   );
  }

  initform() {
    let card_number = '';
    let cvv = null;
    const value = null;
    let expiry_date = '';
    let destination_user_id = null;

  if (this.selectedCard !== null) {
      card_number = this.selectedCard.number;
      cvv = this.selectedCard.securityCode;
      expiry_date = this.selectedCard.validate;
    }
    if (this.pessoa['id']) {
      destination_user_id = this.pessoa.id;
    } else {
      destination_user_id = null;
    }
    this.pagamentoForm = new FormGroup({
    'card_number': new FormControl(card_number, Validators.required),
     'value' : new FormControl(value, [Validators.required, Validators.pattern(/([0-9])+[.]([0-9]){2}/)]),
     'cvv' : new FormControl(cvv, Validators.required),
     'expiry_date' : new FormControl(expiry_date, Validators.required),
     'destination_user_id' : new FormControl(destination_user_id, Validators.required)
  });
  }

  onSubmit() {
    const date = new Date();
    const transaction = '88888888';
    this.dialogBoxService.sendDataPayment(
      transaction,
      date,
      this.selectedCard.end_numbers,
      this.pagamentoForm.get('value').value);
    console.log(this.pagamentoForm.value);
    this.dataServer.sendPayment(this.pagamentoForm)
      .subscribe(
        (response) => {
          console.log(response);
          console.log(response['transaction']['status']);
        }
      );
    this.dialogBoxService.onClickoutbox();
    this.dialogBoxService.showFinishPayment.next(true);
    this.pagamentoForm.get('value').reset();
  }

  close() {
    this.visible = false;

    this.dialogBoxService.onClickoutbox();
  }
  addNewCard() {
    this.dialogBoxService.onClickoutbox();
    this.dialogBoxService.showNovoCartao.next(true);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.subsIndex.unsubscribe();
    this.subsCreditCards.unsubscribe();
  }

  // apagar
  comeBack() {
   console.log( this.creditCards);
   console.log( this.creditCards.length);
  }

  // apagar
  comeBack2() {
    this.dialogBoxService.onClickoutbox();
    this.dialogBoxService.showCardsList.next(true);
  }
  comeBack3() {
    this.dialogBoxService.onClickoutbox();
    this.dialogBoxService.showFinishPayment.next(true);
  }
  onChangeCard() {
    this.dialogBoxService.onClickoutbox();
    this.dialogBoxService.showCardsList.next(true);
  }

}

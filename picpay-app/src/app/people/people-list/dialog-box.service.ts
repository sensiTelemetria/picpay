import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Pessoas} from '../pessoas.model';
import {CreditCard} from '../credit-card/credit-card.model';
import {DataPaymentModel} from '../data-payment/data-payment.model';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService implements OnInit{

  showDialog = new Subject<boolean>();
  showNovoCartao = new Subject<boolean>();
  showCardsList = new Subject<boolean>();
  showFinishPayment = new Subject<boolean>();
  changedCreditCards = new Subject<CreditCard[]>();
  dataPayment = new Subject<DataPaymentModel>();
  pessoa = new Subject<Pessoas>();
  creditCards: CreditCard[];
  cardIndex = new Subject<number>();


  constructor() {

    const tempCreditCard: CreditCard[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      tempCreditCard.push(value);
    }
    this.creditCards = tempCreditCard;
  }
  ngOnInit() {
    this.changedCreditCards.next(this.creditCards.slice());
    this.cardIndex.next(this.creditCards.length - 1);
  }
  onClickoutbox() {
    this.showDialog.next(false);
    this.showNovoCartao.next(false);
    this.showCardsList.next(false);
    this.showFinishPayment.next(false);
  }
  onSelecPessoa(pessoa: Pessoas) {
    this.pessoa.next(pessoa);
  }
  addNewCard(card: CreditCard) {
    this.creditCards.push(card);
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(card));
    this.changedCreditCards.next(this.creditCards.slice());
    this.cardIndex.next(this.creditCards.length - 1);
  }
  sendDataPayment(transaction: string, date: Date, cardEndNumber: string, value: string) {
    const dataPay = new DataPaymentModel(transaction, date, cardEndNumber, value);
    this.dataPayment.next(dataPay);
  }
  getCard(index: number) {
    return this.creditCards[index];
  }
  getCards() {
    return this.creditCards.slice();
  }
}

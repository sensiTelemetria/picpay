import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DialogBoxService} from '../dialog-box.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Pessoas} from '../../pessoas.model';
import {Subscription} from 'rxjs';
import {CreditCard} from '../../credit-card/credit-card.model';

@Component({
  selector: 'app-novo-cartao',
  templateUrl: './novo-cartao.component.html',
  styleUrls: ['./novo-cartao.component.css']
})
export class NovoCartaoComponent implements OnInit, OnDestroy {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  novoCartaoForm: FormGroup;
  pessoa: Pessoas;
  subs: Subscription;

  constructor(private dialogBoxService: DialogBoxService) { }

  ngOnInit() {
    this.subs = this.dialogBoxService.pessoa.subscribe(
     (pessoa: Pessoas) => {
       this.pessoa = pessoa;
       console.log(this.pessoa);
    this.initForm();
  });
  }
  initForm() {
    const bandeira = '';
    const nomeEscritoCartao = '';
    const numeroCartao = '';
    const validade = '';
    const codigoSeguranca = '';
    const CEP = '';
    this.novoCartaoForm = new FormGroup({
      'bandeira': new FormControl(bandeira, Validators.required),
      'nomeEscritoCartao': new FormControl(nomeEscritoCartao, Validators.required),
      'validade': new FormControl(validade, [Validators.required,
        Validators.pattern(/[0-1][0-9][/][0-9][0-9]/)]),
      'codigoSeguranca': new FormControl(codigoSeguranca, [Validators.required,
      Validators.pattern(/[0-9]/)]),
      'numeroCartao': new FormControl(numeroCartao, Validators.required),
      'CEP': new FormControl(CEP, Validators.required),
    }
    );
  }
  close() {
    this.visible = false;
    this.dialogBoxService.onClickoutbox();
    this.novoCartaoForm.reset();
  }


  onSubmit() {
    const cardNumber: string = this.novoCartaoForm.value['numeroCartao'].toString();
    const end_numbers = cardNumber.substring(cardNumber.length - 4);
    const newCard = new CreditCard(
      this.novoCartaoForm.value['bandeira'],
      this.novoCartaoForm.value['nomeEscritoCartao'],
      cardNumber,
      end_numbers,
      this.novoCartaoForm.value['validade'],
      this.novoCartaoForm.value['codigoSeguranca'],
      this.novoCartaoForm.value['CEP'],
    );
    this.dialogBoxService.addNewCard(newCard);
    this.dialogBoxService.onClickoutbox();
    this.dialogBoxService.showDialog.next(true);
    this.novoCartaoForm.reset();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSelect() {
    console.log('selecionado');
  }

}

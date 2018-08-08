import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pessoas} from '../pessoas.model';
import {DataService} from '../data-server.service';
import {Subscription} from 'rxjs';
import {DialogBoxService} from './dialog-box.service';


@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit, OnDestroy {

  constructor(private dataServer: DataService,
              private dialogBoxService: DialogBoxService) { }
  pessoas: Pessoas[];
  subsDialog: Subscription;
  subsNovoCartao: Subscription;
  subsCardsList: Subscription;
  subsFinishPayment: Subscription;
  showDialog: boolean;
  showNovoCartao: boolean;
  showCardsList: boolean;
  showFinishPayment: boolean;

  onClick() {
    this.showDialog = !this.showDialog;
    console.log(this.showDialog);
  }
  ngOnInit() {

    this.subsDialog = this.dialogBoxService.showDialog.subscribe(
      (bool: boolean) => {
        this.showDialog = bool;
      }
    );
      this.subsNovoCartao = this.dialogBoxService.showNovoCartao.subscribe(
      (bool: boolean) => {
        this.showNovoCartao = bool;
      }
    );
      this.subsCardsList = this.dialogBoxService.showCardsList.subscribe(
      (bool: boolean) => {
        this.showCardsList = bool;
      }
    );
      this.subsFinishPayment = this.dialogBoxService.showFinishPayment.subscribe(
      (bool: boolean) => {
        this.showFinishPayment = bool;
      }
    );
    this.dataServer.getPessoas().subscribe(
      (pessoas) => {
        this.pessoas = pessoas;
      }
    );
  }
  ngOnDestroy() {
    this.subsDialog.unsubscribe();
    this.subsNovoCartao.unsubscribe();
    this.subsCardsList.unsubscribe();
    this.subsFinishPayment.unsubscribe();
  }
}

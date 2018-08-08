import {Component, Input, OnInit} from '@angular/core';
import {Pessoas} from '../../pessoas.model';
import {DialogBoxService} from '../dialog-box.service';

@Component({
  selector: 'app-pessoas-item',
  templateUrl: './pessoas-item.component.html',
  styleUrls: ['./pessoas-item.component.css']
})
export class PessoasItemComponent implements OnInit {
  @Input() pessoa: Pessoas;
  @Input() index: number;
  constructor(private dialogBoxService: DialogBoxService) { }

  ngOnInit() {
  }

  onClick() {
    this.dialogBoxService.showDialog.next(true);
    this.dialogBoxService.onSelecPessoa(this.pessoa);
  }
}

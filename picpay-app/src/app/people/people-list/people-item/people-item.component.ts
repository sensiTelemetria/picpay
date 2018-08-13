import {Component, Input, OnInit} from '@angular/core';
import {Pessoas} from '../../pessoas.model';
import {DialogBoxService} from '../dialog-box.service';


@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
  @Input() person: Pessoas;
  @Input() index: number;
  constructor(private dialogBoxService: DialogBoxService) { }

  ngOnInit() {
  }

  onClick() {
    this.dialogBoxService.showDialog.next(true);
    this.dialogBoxService.onSelecPessoa(this.person);
  }
}

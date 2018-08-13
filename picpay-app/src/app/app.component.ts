import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pessoas} from './people/pessoas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';

  ngOnInit() {}
  ngOnDestroy() {}
}

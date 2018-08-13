import { Injectable } from '@angular/core';
import {Pessoas} from './pessoas.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getPessoas() {
    return this.httpClient.get<Pessoas[]>('http://careers.picpay.com/tests/mobdev/users');
  }
  sendPayment(form: FormGroup) {
    return this.httpClient.post(
      'http://careers.picpay.com/tests/mobdev/transaction'
      , form.value
      , { observe: 'body' }
      );
  }
}

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {stringDistance} from 'codelyzer/util/utils';
import {Router} from '@angular/router';

@Injectable()
export class AuthServiceService {
  token: string;
  constructor(private router: Router) { }

  SignUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  SignInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
          (token: string) => this.token = token
        );
      }
    ).catch(
      error => console.log(error)
    );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
          (token: string) => this.token = token
        );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}

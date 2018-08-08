import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.SignInUser(email, password);
  }
  ngOnInit() {
  }

}

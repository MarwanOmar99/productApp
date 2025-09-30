import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  model = {
    userName: null,
    userEmail: null,
    userPassword: null,
    confirmPassword: null,
  };
  handelsubmit(form: NgForm) {
    console.log(form);
  }
  handelConfirmPassword(): boolean {
    return this.model.userPassword === this.model.confirmPassword;
  }
}

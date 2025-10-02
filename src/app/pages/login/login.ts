import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Global } from '../../services/global';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  model: any = {
    email: null,
    password: null,
  };
  startLogin: boolean = false;
  constructor(private global: Global, public toaster: ToastrService, private route: Router) {}
  handelsubmit(form: NgForm) {
    if (form.valid) {
      this.startLogin = true;
      this.global.postLogin(this.model).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.data.token);
          console.log(localStorage.getItem('token'));
          this.route.navigateByUrl('/');
        },
        error: (err) => {
          console.log(err);
          this.toaster.error('Login filed');
        },
      });
    }
  }
}

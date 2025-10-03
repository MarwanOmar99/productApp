import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  Model = {
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    password: null,
    confirm_password: null,
  };
  constructor(private global: Global, private toaster: ToastrService, private route: Router) {}
  handelSubmit(FormRegitser: NgForm) {
    if (FormRegitser.valid && this.handelConfirmPassword()) {
      this.global.postRegisterData(this.Model).subscribe({
        next: (res) => {
          this.route.navigateByUrl('/login');
          this.toaster.success('wellcome : register done');
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('notConfirmed');
    }
  }
  handelConfirmPassword(): boolean {
    if (!this.Model.password || !this.Model.confirm_password) {
      return false;
    }
    return this.Model.password === this.Model.confirm_password;
  }
}

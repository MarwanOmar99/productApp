import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  Model = {
    FirstName: null,
    LastName: null,
    PhoneNumber: null,
    Email: null,
    Password: null,
    confirmPassword: null,
  };
  constructor(private global: Global, private toaster: ToastrService) {}
  handelSubmit(FormRegitser: NgForm) {
    if (FormRegitser.valid && this.handelConfirmPassword()) {
      this.global.postRegisterData(this.Model).subscribe({
        next: (res) => {
          console.log(res);
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
    if (!this.Model.Password || !this.Model.confirmPassword) {
      return false;
    }
    return this.Model.Password === this.Model.confirmPassword;
  }
}

import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  Model = {
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
  };
  constructor(private global: Global, private toaster: ToastrService) {
    global.getProfile().subscribe({
      next: (res) => {
        console.log(res);
        this.Model.first_name = res.data.customer_first_name;
        this.Model.last_name = res.data.customer_last_name;
        this.Model.email = res.data.customer_email;
        this.Model.phone = res.data.customer_phone;
      },
    });
  }
  handelSubmit(FormRegitser: NgForm) {
    if (FormRegitser.valid) {
      this.global.upDateInfo(this.Model).subscribe({
        next: (res) => {
          this.global.userName = res.data.customer_first_name;
          this.toaster.success('updated');
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('notConfirmed');
    }
  }
}

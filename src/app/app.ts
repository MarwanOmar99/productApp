import { Component, signal } from '@angular/core';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ThirdOnw');
  constructor(public global: Global) {
    this.global.getProfile().subscribe({
      next: (res) => {
        global.userName = res.data.customer_first_name;
        global.userID = res.data.customer_id;
      },
    });
  }
}

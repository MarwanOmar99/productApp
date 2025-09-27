import { Component } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  Icon: any = [];
  get NumIcon(): number {
    return this.global.NumIcon;
  }
  get NumCart(): Number {
    return this.global.NumIconHeart;
  }
  constructor(private global: Global) {}
  ngOnInit() {
    this.Icon = this.global.data;
    console.log(this.Icon);
  }
  handelTest() {
    console.log(this.NumIcon);
  }
}

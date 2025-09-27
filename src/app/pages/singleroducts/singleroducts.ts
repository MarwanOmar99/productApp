import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleroducts',
  standalone: false,
  templateUrl: './singleroducts.html',
  styleUrl: './singleroducts.css',
})
export class Singleroducts {
  SingleProduct: any = [];
  ImagesPath: any = '';
  allPost: any[] = [];
  Hover = '';
  isHover: number | null = null;
  constructor(private global: Global, private activated: ActivatedRoute) {}
  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get('id');
    this.activated.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        this.global.getSingleProducts(param.get('id')).subscribe({
          next: (res) => {
            this.SingleProduct = res;
            this.ImagesPath = this.SingleProduct.images[0];
          },
        });
      },
    });
    this.global.getPosts().subscribe({
      next: (res) => {
        this.allPost = res.products;
        console.log(this.allPost);
      },
    });
  }
}

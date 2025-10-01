import { Component } from '@angular/core';
import { Global } from '../../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  data: any = [];
  AllData: any[] = [];
  isHovered: number | null = null;
  isHover: number | null = null;
  catagery = 'Category';
  categoryList: any = [];
  SearchText: string = '';
  constructor(private global: Global, private route: Router) {}
  ngOnInit() {
    this.global.getPosts().subscribe({
      next: (res) => {
        this.AllData = res.products;
        if (this.catagery === 'Category') {
          this.data = this.AllData;
        }
        this.categoryList = Array.from(new Set(this.AllData.map((item: any) => item.category)));
        console.log(this.categoryList);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  handelIfIcon(index: number) {
    if (this.data[index].cartAdd == true) {
      this.data[index].cartAdd = false;
      this.handelAddAllCart();
    } else {
      this.data[index].cartAdd = true;
      this.handelAddAllCart();
    }
  }
  handelIconFavorite(index: number) {
    if (this.data[index].Favorite == true) {
      this.data[index].Favorite = false;
      this.handelAddAllFavorite();
    } else {
      this.data[index].Favorite = true;
      this.handelAddAllFavorite();
    }
  }
  handelAddAllFavorite() {
    this.global.data = this.data.filter((item: any) => item.Favorite === true);
  }
  handelAddAllCart() {
    this.global.dataCart = this.data.filter((item: any) => item.cartAdd === true);
  }
  filterData() {
    if (this.catagery === 'Category') {
      this.data = this.AllData;
    } else {
      this.data = this.AllData.filter(
        (item: any) => !this.catagery || item.category === this.catagery
      );
    }
  }
  handelSearch() {
    this.data = this.data.filter((item: any) => {
      return item.title.toLowerCase().includes(this.SearchText.toLowerCase());
    });
    console.log(this.data);
  }
  handelNavigate(id: number) {
    this.route.navigate(['products/' + id]);
  }
}

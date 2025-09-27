import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Global {
  constructor(private http: HttpClient) {}
  data: any[] = [];
  dataCart: any[] = [];
  get NumIcon(): number {
    return this.data.length;
  }
  get NumIconHeart(): number {
    return this.dataCart.length;
  }
  getPosts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products?limit=194');
  }
  getSingleProducts(id: any): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}

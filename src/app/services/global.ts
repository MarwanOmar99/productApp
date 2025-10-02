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
  isLogin = false;
  isLogIn = localStorage.getItem('token') ? true : false;
  userName = null;
  userID = null;
  edit = false;
  get NumIcon(): number {
    return this.data.length;
  }
  get NumIconHeart(): number {
    return this.dataCart.length;
  }
  getPosts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products?limit=19');
  }
  getSingleProducts(id: any): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
  postRegisterData(Model: any): Observable<any> {
    return this.http.post(`https://full.faedg.com/public/api/client/customer_register`, Model);
  }
  postLogin(model: any): Observable<any> {
    return this.http.post('https://full.faedg.com/public/api/client/customer_login', model);
  }
  getProfile(): Observable<any> {
    return this.http.get('https://full.faedg.com/public/api/client/profile');
  }
  upDateInfo(modelEdited: any): Observable<any> {
    return this.http.put(
      `https://full.faedg.com/public/api/client/profile/${this.userID}`,
      modelEdited
    );
  }
}

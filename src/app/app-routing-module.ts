import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Posts } from './pages/posts/posts';
import { Products } from './pages/products/products';
import { Singleroducts } from './pages/singleroducts/singleroducts';
import { Carts } from './pages/carts/carts';
import { Favorite } from './pages/favorite/favorite';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';

const routes: Routes = [
  { path: '', component: Index },
  { path: 'posts', component: Posts },
  { path: 'products', component: Products },
  { path: 'products/:id', component: Singleroducts },
  { path: 'carts', component: Carts },
  { path: 'favorite', component: Favorite },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

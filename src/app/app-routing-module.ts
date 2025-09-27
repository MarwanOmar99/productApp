import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './pages/index';
import { Posts } from './pages/posts/posts';
import { Products } from './pages/products/products';
import { Singleroducts } from './pages/singleroducts/singleroducts';
import { Carts } from './pages/carts/carts';
import { Favorite } from './pages/favorite/favorite';

const routes: Routes = [
  { path: '', component: Index },
  { path: 'posts', component: Posts },
  { path: 'products', component: Products },
  { path: 'products/:id', component: Singleroducts },
  { path: 'carts', component: Carts },
  { path: 'favorite', component: Favorite },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

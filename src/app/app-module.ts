import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Posts } from './pages/posts/posts';
import { Products } from './pages/products/products';
import { Index } from './pages/index/index';
import { provideHttpClient } from '@angular/common/http';
import { Singleroducts } from './pages/singleroducts/singleroducts';
import { FormsModule } from '@angular/forms';
import { Cards } from './components/cards/cards';
import { Carts } from './pages/carts/carts';
import { Favorite } from './pages/favorite/favorite';
import { Reviews } from './components/reviews/reviews';

@NgModule({
  declarations: [App, Navbar, Posts, Products, Index, Singleroducts, Cards, Carts, Favorite, Reviews],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}

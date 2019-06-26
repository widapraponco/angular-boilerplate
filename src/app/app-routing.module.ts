import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { ShopPageComponent } from './landing/shop-page/shop-page.component';
import {ShopPage2Component} from './landing/shop-page2/shop-page2.component';
import { PageNotFoundComponent } from './_error';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'landing/shop', component: ShopPageComponent},
  {path: 'landing/shop2', component: ShopPage2Component},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

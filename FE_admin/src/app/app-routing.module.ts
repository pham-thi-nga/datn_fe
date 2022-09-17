import { AccountCreateComponent } from './views/account/account-create/account-create.component';
import { AccountComponent } from './views/account/account.component';
import { ProductComponent } from './views/product/product.component';
import { OrderComponent } from './views/order/order.component';
import { CategoryCreateComponent } from './views/category/category-create/category-create.component';
import { CategoryComponent } from './views/category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/authentication/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account-create', component: AccountCreateComponent },
  { path: 'account-create/:id', component: AccountCreateComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'category-create/:id', component: CategoryCreateComponent },


  { path: 'login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

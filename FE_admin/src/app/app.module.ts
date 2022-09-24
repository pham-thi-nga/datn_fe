import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { OrderComponent } from './views/order/order.component';
import { ProductComponent } from './views/product/product.component';
import { CategoryComponent } from './views/category/category.component';
import { AccountComponent } from './views/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountCreateComponent } from './views/account/account-create/account-create.component';
import { CategoryCreateComponent } from './views/category/category-create/category-create.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './share/spinner/spinner.component';
import { LoginComponent } from './views/authentication/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    OrderComponent,
    ProductComponent,
    CategoryComponent,
    AccountComponent,
    AccountCreateComponent,
    CategoryCreateComponent,
    SpinnerComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

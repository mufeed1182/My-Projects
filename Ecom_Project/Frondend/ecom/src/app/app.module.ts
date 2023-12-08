import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavComponent } from './nav/nav.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MerchantComponent,
    LoginComponent,
    LogoutComponent,
    NavComponent,
    NotAllowedComponent,
    CustomerProductComponent,
    SignupComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

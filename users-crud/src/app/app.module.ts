import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService, AuthService } from './shared/';
import { LoginRegisterModule } from './login/login-register.module';
import { UsersModule } from './users/users.module';
import { CommonService } from './shared/common.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRegisterModule,
    UsersModule
  ],
  providers: [AuthService, TokenInterceptorService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

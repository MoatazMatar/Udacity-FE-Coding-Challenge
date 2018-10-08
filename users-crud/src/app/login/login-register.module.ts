import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterService } from './shared/login-register.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRegisterRoutingModule
  ],
  providers: [LoginRegisterService],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginRegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    JsonPipe,
    
FormsModule
  ]
})
export class LoginModule { }

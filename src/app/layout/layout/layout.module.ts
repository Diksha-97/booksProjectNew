import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NavbarComponent,FooterComponent ],
  imports: [CommonModule, LayoutRoutingModule, FormsModule],
})
export class LayoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [  
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class MainLayoutModule { }

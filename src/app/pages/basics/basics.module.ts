import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoryComponent } from './pages/theory/theory.component';
import { ExampleComponent } from './pages/example/example.component';
import { BasicsRoutingModule } from './basics-routing.module';
import { Theory2Component } from './pages/theory2/theory2.component';

@NgModule({
  declarations: [
    TheoryComponent,
    ExampleComponent,
    Theory2Component
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ]
})
export class BasicsModule { }

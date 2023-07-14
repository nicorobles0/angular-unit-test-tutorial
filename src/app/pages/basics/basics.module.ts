import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoryComponent } from './pages/theory/theory.component';
import { ExampleComponent } from './pages/example/example.component';
import { BasicsRoutingModule } from './basics-routing.module';

@NgModule({
  declarations: [
    TheoryComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ]
})
export class BasicsModule { }

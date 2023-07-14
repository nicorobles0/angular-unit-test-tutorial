import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TheoryComponent } from './pages/theory/theory.component';
import { ExampleComponent } from './pages/example/example.component';

const routes: Routes = [
  {
    path: 'teoria',
    component: TheoryComponent
  },
  {
    path: 'ejemplo',
    component: ExampleComponent
  },
  {
    path: '**',
    redirectTo: 'teoria'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TheoryComponent } from './pages/theory/theory.component';
import { ExampleComponent } from './pages/example/example.component';
import { Theory2Component } from './pages/theory2/theory2.component';

const routes: Routes = [
  {
    path: 'teoria',
    component: TheoryComponent
  },
  {
    path: 'teoria-2',
    component: Theory2Component
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Theory1Component } from './pages/theory1/theory1.component';
import { ExampleComponent } from './pages/example/example.component';
import { Example2Component } from './pages/example2/example2.component';
import { Example3Component } from './pages/example3/example3.component';

const routes: Routes = [
  {
    path: 'teoria',
    component: Theory1Component
  },
  {
    path: 'ejercicio',
    component: ExampleComponent
  },
  {
    path: 'ejercicio2',
    component: Example2Component
  },
  {
    path: 'ejercicio3',
    component: Example3Component
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateRoutingModule { }

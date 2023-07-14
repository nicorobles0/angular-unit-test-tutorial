import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntermediateIndexComponent } from './pages/index/intermediate-index.component';

const routes: Routes = [
  {
    path: 'teoria2',
    component: IntermediateIndexComponent
  },
  {
    path: 'ejercicio',
    component: IntermediateIndexComponent
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateRoutingModule { }

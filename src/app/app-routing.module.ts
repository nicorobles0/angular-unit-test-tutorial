import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'basico',
        loadChildren: () => import('./pages/basics/basics.module').then(m => m.BasicsModule) 
      },
      {
        path: 'intermedio',
        loadChildren: () => import('./pages/Intermediate/Intermediate.module').then(m => m.IntermediateModule) 
      },
      {
        path: '**',
        redirectTo: 'basico'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(mod => mod.TestModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(mod => mod.DemoModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

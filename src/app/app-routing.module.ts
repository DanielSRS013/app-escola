import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './professor/create/create.component';
import { ListarComponent } from './professor/listar/listar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'professor/listar',
    pathMatch: 'full'
  },
  {
    path:'professor/create',
    component: CreateComponent
  },
  {
    path:'professor/listar',
    component: ListarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

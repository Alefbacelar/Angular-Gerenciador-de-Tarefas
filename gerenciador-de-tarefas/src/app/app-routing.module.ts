import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasRoutes } from './pages/tarefas/tarefas-routing.module'

const routes: Routes = [
  {
		path: '',
		redirectTo: '/tarefas/listar',
		pathMatch: 'full'
	},
	...TarefasRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentRoutesComponent } from './current-routes/current-routes.component';

const routes: Routes = [
  {path: 'get-current-routes', component: CurrentRoutesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

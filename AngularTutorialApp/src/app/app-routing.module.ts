import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentRoutesComponent } from './current-routes/current-routes.component';
import { GetProviderComponent } from './get-provider/get-provider.component';

const routes: Routes = [
  {path: 'get-current-routes', component: CurrentRoutesComponent},
  {path: 'get-provider', component: GetProviderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrazaComponent } from './layout/traza/traza.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

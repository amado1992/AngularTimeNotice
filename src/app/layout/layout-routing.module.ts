import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TrazaComponent } from './traza/traza.component';
import { TrazaListComponent } from './traza-list/traza-list.component';
import { CanActivateTeamGuard } from '../can-activate-team.guard';

const routes: Routes = [{ path: '', component: LayoutComponent },
{ path: 'detail/:id', component: TrazaComponent },
{ path: 'trazaslist', component: TrazaListComponent, canActivate: [CanActivateTeamGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

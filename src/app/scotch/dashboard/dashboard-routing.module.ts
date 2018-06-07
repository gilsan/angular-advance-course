import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardUserHomeComponent } from 'src/app/scotch/dashboard/dashboard-user-home/dashboard-user-home.component';
import { DashboardUserDetailsComponent } from './dashboard-user-details/dashboard-user-details.component';
import { AuthGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivated-guard.service';

const routes: Routes = [
  {
      path: 'dashboard',
      children: [
        {
          path: '',
          canActivate: [AuthGuard],
          component: DashboardComponent
        },
        {
          path: 'users',
          canActivateChild: [AuthGuard],
          component: DashboardUsersComponent,
          children: [
            {
               path: '',
               component: DashboardUserHomeComponent
            },
            {
              path: ':username',
              canDeactivate: [ CanDeactivateGuard],
              component: DashboardUserDetailsComponent
            }
          ]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardUserHomeComponent } from './dashboard-user-home/dashboard-user-home.component';
import { DashboardUserDetailsComponent } from './dashboard-user-details/dashboard-user-details.component';
import { UserService } from '../about/service/user.service';
import { FormsModule } from '@angular/forms';
import { CanDeactivateGuard } from './guards/can-deactivated-guard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent, DashboardUsersComponent,
    DashboardUserHomeComponent, DashboardUserDetailsComponent],
  providers: [
    UserService,
    CanDeactivateGuard
  ]
})
export class DashboardModule { }

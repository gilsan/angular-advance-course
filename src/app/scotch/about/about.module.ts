import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routing';

import { UserService } from './service/user.service';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutSectionComponent } from './AboutSection.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './aboutuser-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AboutSectionComponent,
    AboutUserComponent
  ],
  providers: [
    UserService,
    AboutUsersResolve,
    AboutUserResolve
  ]
})
export class AboutModule { }

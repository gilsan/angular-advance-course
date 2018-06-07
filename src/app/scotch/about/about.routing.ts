import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutSectionComponent } from './AboutSection.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './aboutuser-resolve.service';

const aboutRoute: Routes = [
        { path: '', component: AboutSectionComponent,
        children: [
           { path: '' ,
             component: AboutComponent,
             resolve: { users: AboutUsersResolve }
            },
           { path: ':username', component: AboutUserComponent,
             resolve: { user : AboutUserResolve }
          },
        ]
       }
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoute)],
  exports: [RouterModule]

})
export class AboutRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseResolver} from './services/course.resolver';

const routes: Routes = [
  { path: '', component: ContactComponent,
      children: [
        { path: 'home', component: HomeComponent},

        { path: 'courses/:id', component: CourseComponent,
          resolve: { course: CourseResolver }
       },
        { path: 'about' , component: AboutComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

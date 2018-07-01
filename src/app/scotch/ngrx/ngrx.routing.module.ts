import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', component: NgrxComponent,
    children : [
      { path: 'login', component: LoginComponent},
      { path: 'courses', component: CoursesComponent}
   ]
 }
];

@NgModule ({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NgrxRoutingModule {

}

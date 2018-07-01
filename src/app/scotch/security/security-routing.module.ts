import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: SecurityComponent,
      children: [
        { path: '',  component: LoginComponent},
        { path: 'login', component: LoginComponent},
        { path: 'signup' , component: SignupComponent},
        { path: 'lessons', component: LessonsComponent},
        { path: 'admin', component: AdminComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class SecurityRoutingModule { }

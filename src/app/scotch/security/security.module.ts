import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SecurityRoutingModule } from './security-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SecurityComponent } from './security.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { LessonsService } from './services/lessons.service';
import { AuthService } from './services/auth.service';



@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    SecurityComponent,
    SignupComponent, LoginComponent,
    LessonsComponent, HeaderComponent,
    SidebarComponent
  ],
  providers: [LessonsService, AuthService]
})
export class SecurityModule { }

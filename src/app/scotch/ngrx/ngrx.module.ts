import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgrxRoutingModule } from './ngrx.routing.module';

import { NgrxComponent } from './ngrx.component';
import { MaterialModule } from '../../shared/material.module';
import { CoursesComponent } from './courses/courses.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
   CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgrxRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [
    NgrxComponent,
    CoursesComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    AuthService
  ]
})
export class NgrxModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule  } from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
 import { NotFoundComponent } from './scotch/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './scotch/dashboard/dashboard.module';
import { AuthGuard } from './scotch/dashboard/guards/auth-guard.service';
import { HomeModule } from './scotch/home/home.module';




@NgModule({
  declarations: [
    AppComponent,

    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    DashboardModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,
   // ContactModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

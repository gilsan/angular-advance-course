import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule  } from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
/*
echo "# board" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/gilsan/board.git
git push -u origin master

*/
import { NotFoundComponent } from './scotch/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './scotch/dashboard/dashboard.module';
import { AuthGuard } from './scotch/dashboard/guards/auth-guard.service';
import { HomeModule } from './scotch/home/home.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { Config } from '../config/config';


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
    AngularFireModule.initializeApp(Config.config),
   // ContactModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

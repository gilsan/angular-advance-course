import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MaterialModule } from '../../shared/material.module';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { CourseService } from './services/course.service';
import { CourseResolver } from './services/course.resolver';
// import { CourseCardListComponent } from './course-card-list/course-card-list.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule

  ],
  declarations: [
    ContactComponent,
    TopMenuComponent,
    CourseComponent,
    AboutComponent,
    HomeComponent,
    CourseDialogComponent,
    CourseCardListComponent
  ],
  providers: [
    CourseService,
    CourseResolver,
    {provide: MAT_DATE_LOCALE, useValue: 'ko'},
  ],
  entryComponents: [
    CourseDialogComponent,

  ]
})
export class ContactModule { }

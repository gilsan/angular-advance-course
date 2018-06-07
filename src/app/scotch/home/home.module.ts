import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { AcordionComponent } from './acordion/acordion.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodepenComponent } from './codepen/codepen.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent,
    CalculatorComponent,
    ButtonsComponent,
    StopwatchComponent,
    AcordionComponent,
    ProgressComponent,
    CodepenComponent,


  ]
})
export class HomeModule { }

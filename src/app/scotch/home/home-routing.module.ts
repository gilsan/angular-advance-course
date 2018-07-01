import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { AcordionComponent } from './acordion/acordion.component';
import { ProgressComponent } from './progress/progress.component';
import { CodepenComponent } from './codepen/codepen.component';
import { ChatComponent } from './chat/chat.component';

const homeroutes: Routes = [
  { path: 'home',   component: HomeComponent,
    children: [
       { path: 'calculator', component: CalculatorComponent},
       { path: 'chat',       component:   ChatComponent },
       { path: 'codepen',    component: CodepenComponent},
       { path: 'stopwatch',  component: StopwatchComponent },
       { path: 'accordion',   component: AcordionComponent },
       { path: 'progress',   component: ProgressComponent}
     ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(homeroutes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }

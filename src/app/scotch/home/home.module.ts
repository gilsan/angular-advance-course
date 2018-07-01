import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
import { ChatComponent } from './chat/chat.component';
import { UserSelectionComponent } from './chat/user-selection/user-selection.component';
import { ThreadSectionComponent } from './chat/thread-section/thread-section.component';
import { MessageSectionComponent } from './chat/message-section/message-section.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { ThreadListComponent } from './chat/thread-list/thread-list.component';
import { ThreadsService } from './chat/services/threads.service';
import { StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
  CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({})
  ],
  declarations: [
    HomeComponent,
    CalculatorComponent,
    ButtonsComponent,
    StopwatchComponent,
    AcordionComponent,
    ProgressComponent,
    CodepenComponent,
    ChatComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    MessageListComponent,
    ThreadListComponent,
  ],
  providers: [ThreadsService]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule  } from '../shared/material.module';

import { FontComponent } from './font/font.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { AuFaInputComponent } from './font/lib/au-fa-input/au-fa-input.component';
import { AuMdInputComponent } from './font/lib/au-md-input/au-md-input.component';
import { InputRefDirective } from './font/lib/common/input-ref.directive';
// import { TabsModule } from './tabs/tabs.module';
import { ModalModule } from './modal/modal.module';
import { AuMaskComponent } from './au-mask/au-mask.component';
import { AuMaskDirective } from './au-mask/au-mask.directive';


@NgModule({
   declarations: [
     FontComponent,
     ComponentsComponent,
     AuFaInputComponent,
     AuMdInputComponent,
     InputRefDirective,
     AuMaskDirective,
     AuMaskComponent

    ],
   imports: [
    CommonModule,
     MaterialModule,
     ComponentsRoutingModule,

     MaterialModule,
     ModalModule.forRoot(),
    ],
   exports: []
})
export class ComponentsModule {}

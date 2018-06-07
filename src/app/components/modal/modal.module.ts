import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { AuTabComponent } from '../tabs/au-tab/au-tab.component';
import { AuTabPanelComponent } from '../tabs/au-tab-panel/au-tab-panel.component';
import { AuModalComponent } from './au-modal/au-modal.component';
import { AuModalOpenOnCliekDirective } from './directive/au-modal-open-on-cliek.directive';
import { AuModalService } from './modal.service';
import { animation } from '@angular/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModalComponent,
    AuTabComponent,
    AuTabPanelComponent,
    AuModalComponent,
    AuModalOpenOnCliekDirective
  ],

})
export class ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [AuModalService]
    };
  }
}

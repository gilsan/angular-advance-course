import { NgModule} from '@angular/core';
import { Routes , Router, RouterModule } from '@angular/router';
import { FontComponent } from './font/font.component';
import { ComponentsComponent } from './components.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalComponent } from './modal/modal.component';
import { AuMaskComponent } from './au-mask/au-mask.component';

const AuRoutes: Routes = [
  { path: '',
    component: ComponentsComponent,
    children: [
    {  path: 'font', component: FontComponent },
    {  path: 'tabs', component: TabsComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'mask',  component: AuMaskComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(AuRoutes)
  ],
  exports: [ RouterModule]
})
export class ComponentsRoutingModule {}

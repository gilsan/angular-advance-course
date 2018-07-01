import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './scotch/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'font', loadChildren: './components/components.module#ComponentsModule'},
  { path: 'about', loadChildren: './scotch/about/about.module#AboutModule'},
  { path: 'material',  loadChildren: './scotch/material/contact.module#ContactModule'  },
  { path: 'security',  loadChildren: './scotch/security/security.module#SecurityModule'  },
  { path: 'ngrxstore', loadChildren: './scotch/ngrx/ngrx.module#NgrxModule' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

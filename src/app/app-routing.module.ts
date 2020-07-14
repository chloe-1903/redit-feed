import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageListComponent} from './posts/pages/page-list/page-list.component';


const routes: Routes = [
  { path: '',
    component: PageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

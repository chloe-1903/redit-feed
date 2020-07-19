import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageListComponent} from './posts/components/page-list/page-list.component';
import {PageNotFoundComponent} from './page-not-found/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',
    component: PageListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class PageNotFoundModule { }

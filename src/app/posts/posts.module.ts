import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './pages/page-list/page-list.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './components/page-list/page-list.component';
import { PostEntryComponent } from './components/post-entry/post-entry.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [PageListComponent, PostEntryComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PostsModule { }

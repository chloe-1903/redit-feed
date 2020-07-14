import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './components/page-list/page-list.component';
import { PostEntryComponent } from './components/post-entry/post-entry.component';


@NgModule({
  declarations: [PageListComponent, PostEntryComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }

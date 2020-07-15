import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './components/page-list/page-list.component';
import { PostEntryComponent } from './components/post-entry/post-entry.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [PageListComponent, PostEntryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule
  ]
})
export class PostsModule { }

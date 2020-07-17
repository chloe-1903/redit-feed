import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './components/page-list/page-list.component';
import { PostEntryComponent } from './components/post-entry/post-entry.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {SharedModule} from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [PageListComponent, PostEntryComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    SharedModule,
  ]
})
export class PostsModule { }

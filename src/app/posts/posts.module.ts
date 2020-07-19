import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './components/page-list/page-list.component';
import { PostEntryComponent } from './components/post-entry/post-entry.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostPopupComponent } from './components/post-popup/post-popup.component';

@NgModule({
  declarations: [PageListComponent, PostEntryComponent, PostDetailsComponent, PostCommentsComponent, PostPopupComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class PostsModule { }

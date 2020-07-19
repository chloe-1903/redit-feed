import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Post} from '../../../shared/models/post.model';

@Component({
  selector: 'app-post-popup',
  templateUrl: './post-popup.component.html',
  styleUrls: ['./post-popup.component.scss']
})
export class PostPopupComponent implements OnInit {
  // whether we should open post details or its comments
  commentsOpened = false;

  constructor(@Inject(MAT_DIALOG_DATA) public post: Post) { }

  ngOnInit(): void {
  }

}

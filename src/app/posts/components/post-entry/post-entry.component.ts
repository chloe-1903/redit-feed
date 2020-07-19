import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../shared/models/post.model';
import {MatDialog} from '@angular/material/dialog';
import {PostPopupComponent} from '../post-popup/post-popup.component';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss']
})
export class PostEntryComponent implements OnInit {
  @Input() post: Post;

  constructor(private dialog: MatDialog) { }

  openDetails() {
    this.dialog.open(PostPopupComponent, {
      data: this.post,
      width: '70vw',
      autoFocus: false
    });
  }

  ngOnInit(): void {
  }

}

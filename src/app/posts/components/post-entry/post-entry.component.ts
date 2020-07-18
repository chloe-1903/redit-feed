import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../shared/models/post.model';
import {PostDetailsComponent} from '../post-details/post-details.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss']
})
export class PostEntryComponent implements OnInit {
  @Input() post: Post;

  constructor(private dialog: MatDialog) { }

  openDetails() {
    this.dialog.open(PostDetailsComponent, {
      data: this.post,
      width: '60vw',
      autoFocus: false
    });
  }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../shared/models/post.model';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss']
})
export class PostEntryComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}

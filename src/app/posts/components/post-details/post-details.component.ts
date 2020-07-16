import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Post} from '../../../shared/models/post.model';
import {Kind} from '../../../shared/enums/kind.enum';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postKinds = Kind;
  html: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) public post: Post, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.post.video);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  innerContent: SafeHtml;
  @Input() post: Post;
  @Output() openComments = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.post.innerContent) {
      this.innerContent = this.sanitizer.bypassSecurityTrustHtml(this.post.innerContent);
    }
  }

}

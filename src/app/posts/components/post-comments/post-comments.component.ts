import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../../../shared/models/post.model';
import {PostsService} from '../../services/posts.service';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import {UserComment} from '../../../shared/models/comment.model';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @Output() closeComments = new EventEmitter();
  comments$ = new BehaviorSubject<Array<UserComment>>(null);
  private commentsSubscription: Subscription;
  error: string;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.commentsSubscription = this.postsService.getComments(this.post.permalink).pipe(
      tap((result) => {
        this.comments$.next(result);
        if (result.length === 0) {
          this.error = `There is no comment on this post yet.`;
        } else {
          this.error = undefined;
        }
      }), catchError(err => {
        this.error = `An error occurred while getting comments on the post.`;
        return of(null);
      })
      ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.commentsSubscription) {
      this.commentsSubscription.unsubscribe();
    }
  }

}

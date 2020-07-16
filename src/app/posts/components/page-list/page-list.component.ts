import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Post} from '../../../shared/models/post.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit, OnDestroy {
  sub = 'sweden';
  posts$ = new BehaviorSubject<Array<Post>>(null);
  postsSubscription: Subscription;

  paginationLimit = 25;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPostings(this.sub, this.paginationLimit).subscribe((result) => {
      console.log(result);
      this.posts$.next(result);
    });
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

}

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

  paginationBeforePost: string;
  paginationAfterPost: string;
  paginationCountItems = 0;
  paginationLimit = 10;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.updatePosts(null, null);
  }

  updatePosts(before: string, after: string) {
    this.postsService.getPostings(this.sub, this.paginationLimit, this.paginationCountItems, before, after).subscribe((result) => {
      console.log(result);
      this.posts$.next(result.postList);
      this.paginationCountItems = result.postList.length;
      this.paginationBeforePost = result.before;
      this.paginationAfterPost = result.after;
      window.scroll(0, 0);
    });
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

}

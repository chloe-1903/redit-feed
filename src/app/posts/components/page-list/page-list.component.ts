import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import {Post} from '../../../shared/models/post.model';
import {FormControl} from '@angular/forms';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit, OnDestroy {
  posts$ = new BehaviorSubject<Array<Post>>([]);
  postsSubscription: Subscription;
  searchInputFormControl: FormControl;
  error: string;

  paginationBeforePost: string;
  paginationAfterPost: string;
  paginationItemsPerPage = 10;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.searchInputFormControl = new FormControl('sweden');
    this.updatePosts(null, null, 0);
  }

  updatePosts(before: string, after: string, actualPageCount: number) {
    this.postsSubscription = this.postsService.getPosts(this.searchInputFormControl.value,
      this.paginationItemsPerPage, actualPageCount, before, after).pipe(
        tap((result) => {
          this.posts$.next(result.itemsList);
          this.paginationBeforePost = result.before;
          this.paginationAfterPost = result.after;
          window.scroll(0, 0);
          if (result.itemsList.length === 0) {
            this.error = `There is no reddit post on the sub "${this.searchInputFormControl.value}".`;
          } else {
            this.error = undefined;
          }
        }), catchError(err => {
          this.error = `An error occurred while getting reddit posts on the sub "${this.searchInputFormControl.value}". Are you sure this sub really exists? If so, you can try again later.`;
          this.posts$.next([]);
          return of(null);
        })
    ).subscribe();
  }

  submitSearchSub() {
    if (this.searchInputFormControl.value) {
      this.updatePosts(null, null, 0);
    } else {
      this.posts$.next([]);
      this.error = 'Please enter a sub name';
    }
  }

  changePage(action: string) {
    if (action === 'previous') {
      this.updatePosts(this.paginationBeforePost, null, this.posts$.getValue().length);
    } else if (action === 'next') {
      this.updatePosts(null, this.paginationAfterPost, this.posts$.getValue().length);
    }
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

}

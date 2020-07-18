import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Post} from '../../../shared/models/post.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit, OnDestroy {
  posts$ = new BehaviorSubject<Array<Post>>(null);
  postsSubscription: Subscription;
  searchInputFormControl: FormControl;

  paginationBeforePost: string;
  paginationAfterPost: string;
  paginationCountItems = 0;
  paginationItemsPerPage = 10;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.searchInputFormControl = new FormControl('sweden');
    this.updatePosts(null, null);
  }

  updatePosts(before: string, after: string) {
    this.postsSubscription = this.postsService.getPosts(this.searchInputFormControl.value, this.paginationItemsPerPage, this.paginationCountItems, before, after).subscribe((result) => {
      this.posts$.next(result.postList);
      this.paginationCountItems = result.postList.length;
      this.paginationBeforePost = result.before;
      console.log(result.before);
      this.paginationAfterPost = result.after;
      window.scroll(0, 0);
    });
  }

  submitSearchSub() {
    this.paginationCountItems = 0;
    this.updatePosts(null, null);
  }

  changePage(action: string) {
    this.paginationCountItems = 0;
    if (action === 'previous') {
      this.updatePosts(this.paginationBeforePost, null);
    } else if (action === 'next') {
      this.updatePosts(null, this.paginationAfterPost);
    }
  }

  changeItemsPerPage(nb: number) {
    this.paginationItemsPerPage = nb;
    this.updatePosts(null, null);
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

}

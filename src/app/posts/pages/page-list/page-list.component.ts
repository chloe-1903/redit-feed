import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  sub = 'sweden';
  posts = [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    console.log('9999');
    this.postsService.getPostings(this.sub).subscribe((result) => {
      console.log(result);
    });
  }

}

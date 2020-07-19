import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../../shared/models/post.model';
import {PaginateList} from '../../shared/models/paginated-list.model';
import {UserComment} from '../../shared/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://www.reddit.com/';

  constructor(private http: HttpClient) { }

  getComments(permalink: string): Observable<Array<UserComment>> {
    const urlComments = `${this.url}${permalink}.json`;
    return this.http.get<any>(urlComments).pipe(
      map(response => {
        return response[1].data.children.map((item) => {
          return new UserComment(item.data);
        });
      })
    );
  }

  getPosts(sub: string, paginationLimit: number, paginationCount: number,
           previous: string, next: string): Observable<PaginateList<Post>>{
    const getFeedUrl = `${this.url}r/${sub}.json`;
    let paginationParams = new HttpParams();
    if (paginationLimit !== null) {
      paginationParams =  paginationParams.append('limit', paginationLimit.toString());
    }
    if (paginationCount !== null && paginationCount !== 0) {
      paginationParams =  paginationParams.append('count', paginationCount.toString());
    }
    if (previous) {
      paginationParams =  paginationParams.append('before', previous);
    }
    if (next) {
      paginationParams =  paginationParams.append('after', next);
    }
    return this.http.get<any>(getFeedUrl, {params: paginationParams}).pipe(
      map(response => {
        const posts = response.data.children.map((item) => {
          return new Post(item.data);
        });
        // issue in the API : response.data.before is always empty
        return new PaginateList<Post>(response.data.before, response.data.after, posts);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../../shared/models/post.model';
import {PaginateList} from '../../shared/models/paginated-list.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://www.reddit.com/';

  constructor(private http: HttpClient) { }

  getPostings(sub: string, paginationLimit: number, paginationCount: number,
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
        // response.data.children[0].data.name
        return new PaginateList<Post>(response.data.before, response.data.after, posts);
      })
    );
  }
}

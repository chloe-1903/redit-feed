import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../../shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://www.reddit.com/';

  constructor(private http: HttpClient) { }

  getPostings(sub: string, paginationLimit = 25): Observable<Post>{
    const getFeedUrl = `${this.url}r/${sub}.json`;
    return this.http.get<any>(getFeedUrl).pipe(
      map(response => {
        return response.data.children.map((item) => {
          return new Post(item.data);
        });
      })
    );
  }
}

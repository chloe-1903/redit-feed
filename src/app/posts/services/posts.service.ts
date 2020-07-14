import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://www.reddit.com/';

  constructor(private http: HttpClient) { }

  getPostings(sub: string): Observable<any>{
    const getFeedUrl = `${this.url}r/${sub}.json`;
    return this.http.get(getFeedUrl);
  }
}

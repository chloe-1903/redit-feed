import {getTestBed, inject, TestBed} from '@angular/core/testing';

import { PostsService } from './posts.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PostsService', () => {
  let injector: TestBed;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService],
    });

    injector = getTestBed();
    service = injector.get(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('correct sub should return posts', () => {
    service.getPosts('sweden', 10, null, null, null).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.postList.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('not existing topic should not return posts', () => {
    service.getPosts('qsdfghj12LkX09', 10, null, null, null).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.postList.length).toBe(0);
    });
  });
});

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
      expect(result.itemsList.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('not existing topic should not return posts', () => {
    service.getPosts('qsdfghj12LkX09', 10, null, null, null).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.itemsList.length).toBe(0);
    });
  });

  it('sticky rules post has comments', () => {
    service.getComments('/r/sweden/comments/hqem4s/sweddit_universalis_europa_universalis_iv_mp/').subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('wrong permalink returns empty comment', () => {
    service.getComments('/r/sweden/comments/hqem4s/unknown9875JGF9O01JGK0/').subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.length).toBe(0);
    });
  });

});

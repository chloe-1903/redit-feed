export class PaginateList<T> {
  before: string;
  after: string;
  postList: Array<T>;

  constructor(before: string, after: string, postList: Array<T>) {
    this.before = before;
    this.after = after;
    this.postList = postList;
  }
}

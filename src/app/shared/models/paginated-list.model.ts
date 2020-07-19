export class PaginatedList<T> {
  before: string;
  after: string;
  itemsList: Array<T>;

  constructor(before: string, after: string, itemsList: Array<T>) {
    this.before = before;
    this.after = after;
    this.itemsList = itemsList;
  }
}

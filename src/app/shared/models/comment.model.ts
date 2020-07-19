export class UserComment {
  author: string;
  date: Date;
  content: string;

  constructor(obj?: any) {
    this.author = obj.author;
    this.content = obj.body;
    this.date = new Date(obj.created);
  }
}

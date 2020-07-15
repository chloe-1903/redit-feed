export class Post {
  title: string;
  author: string;
  score: number;
  permalink: string;
  numComments: number;
  created: Date;
  thumbnail: string;

  constructor(obj?: any) {
    this.title = obj.title;
    this.author = obj.author_fullname;
    this.score = obj.score;
    this.permalink = obj.permalink;
    this.numComments = obj.num_comments;
    this.created = new Date(obj.created_utc * 1000);
    if (obj.thumbnail === 'self') {
      this.thumbnail = 'assets/default-thumbnail.png';
    } else {
      this.thumbnail = obj.thumbnail;
    }
  }
}

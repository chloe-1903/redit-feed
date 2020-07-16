import {Kind} from '../enums/kind.enum';

export class Post {
  title: string;
  author: string;
  score: number;
  permalink: string;
  numComments: number;
  created: Date;
  thumbnail: string;
  url: string;
  kind: Kind;
  selftext: string;
  video: string;

  constructor(obj?: any) {
    this.title = obj.title;
    this.author = obj.author_flair_text || 'anonymous';
    this.score = obj.score;
    this.permalink = obj.permalink;
    this.numComments = obj.num_comments;
    this.created = new Date(obj.created_utc * 1000);
    if (obj.thumbnail === 'self') {
      this.thumbnail = 'assets/default-thumbnail.png';
    } else {
      this.thumbnail = obj.thumbnail;
      this.url = obj.url;
    }
    this.selftext = obj.selftext;
    this.kind = obj.post_hint;
    if (this.kind === Kind.VIDEO) {
      this.video = obj.media.oembed.html;
    }
    console.log(this.kind);
  }
}

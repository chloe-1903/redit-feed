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
  innerContent: string;

  constructor(obj?: any) {
    this.title = obj.title;
    this.author = obj.author_flair_text || 'anonymous';
    this.score = obj.score;
    this.permalink = obj.permalink;
    this.numComments = obj.num_comments;
    this.created = new Date(obj.created_utc * 1000);
    this.url = obj.url;
    this.selftext = obj.selftext;
    this.kind = obj.post_hint;

    // default thumbnail image
    if (obj.thumbnail === 'self' || obj.thumbnail === 'default') {
      this.thumbnail = 'assets/default-thumbnail.png';
    } else {
      this.thumbnail = obj.thumbnail;
    }

    if (this.kind === Kind.RICH_VIDEO) {
      this.innerContent = this.decodeHtml(obj.media.oembed.html);
    } else if (this.kind === Kind.HOSTED_VIDEO) {
      this.url = obj.media.reddit_video.fallback_url;
    }
    // some posts don't have any kind, so we set it here:
    if (this.selftext && !this.kind) {
      this.kind = Kind.SELF;
    }
  }

  /**
   * Decoding html content given by the server to display it on templates
   * @param str : html string to decode
   */
  private decodeHtml(str: string): string {
    return str.split('&lt;').join('<').split('&gt;').join('>');
  }
}

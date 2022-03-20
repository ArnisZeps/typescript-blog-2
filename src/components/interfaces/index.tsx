export interface IComment {
  id: string;
  text: string;
}

export interface IBlogPost {
    id: string;
    text: string;
    comments: IComment[];
  }
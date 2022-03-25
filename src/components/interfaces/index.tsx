export interface IComment {
  postId: string;
  commentId: string;
  text: string;
}

export interface IBlogPost {
  postId: string;
  text: string;
  comments?: IComment[];
}
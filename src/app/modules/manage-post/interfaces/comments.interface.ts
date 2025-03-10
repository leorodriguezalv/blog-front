export interface BodyCreateComment {
  comment: string;
  userId: number;
  postId: number;
}

export interface CommentsList {
  commentId: number;
  comment: string;
  creationDate: Date;
  userId: number;
  userName: string;
}

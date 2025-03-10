export interface PostInfo {
  name: string;
  title: string;
  postId: number;
  userId: number;
  caption: string;
  userName: string;
  image: string | null;
  categories: string;
  creationDate: Date;
  updatingDate: Date | null;
}

export interface BodyUpdatePost {
  image: string | null;
  title: string;
  caption: string;
}
export interface BodyCreatePost extends BodyUpdatePost {
  userId: number;
  categories: string;
}

export interface PostDetails extends PostInfo {
  commentId: number;
  comment: string;
  commentDate: Date;
}

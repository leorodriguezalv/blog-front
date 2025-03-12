import { BodyCreateComment } from '../../../modules/manage-post/interfaces/comments.interface';
import { PostInfo } from '../../../modules/manage-post/interfaces/post.interfaces';

export class GetCommentToSave {
  static handle(comment: string, post: PostInfo): BodyCreateComment {
    const { userId, postId } = post;
    return {
      userId,
      postId,
      comment,
    };
  }
}

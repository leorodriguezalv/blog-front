import { FormGroup } from '@angular/forms';
import { PostFormType } from '../../interfaces/form.interfaces';
import {
  BodyUpdatePost,
  PostInfo,
} from '../../../modules/manage-post/interfaces/post.interfaces';

export class GetUpdatePostToSave {
  static build(postForm: FormGroup<PostFormType>): BodyUpdatePost {
    const controls = postForm.controls;
    const title = controls.title.getRawValue() ?? '';
    const caption = controls.caption.getRawValue() ?? '';
    return {
      title,
      caption,
      image: null,
    };
  }
}

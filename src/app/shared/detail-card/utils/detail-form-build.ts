import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostFormType } from '../../interfaces/form.interfaces';

export class PostFormBuild {
  static build(fb: FormBuilder): FormGroup<PostFormType> {
    return fb.group<PostFormType>({
      title: new FormControl<string | null>(''),
      caption: new FormControl<string | null>(''),
      categories: new FormControl<string | null>(''),
      comment: new FormControl<string | null>(''),
    });
  }
}

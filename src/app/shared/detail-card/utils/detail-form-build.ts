import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostFormType } from '../../interfaces/form.interfaces';

export class PostFormBuild {
  static build(fb: FormBuilder): FormGroup<PostFormType> {
    const required = Validators.required;
    return fb.group<PostFormType>({
      title: new FormControl<string | null>('', [required]),
      caption: new FormControl<string | null>('', [required]),
      categories: new FormControl<string | null>('', [required]),
      comment: new FormControl<string | null>('', [
        required,
        Validators.maxLength(300),
      ]),
    });
  }
}

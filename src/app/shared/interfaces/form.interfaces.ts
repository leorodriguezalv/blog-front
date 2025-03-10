import { FormControl } from '@angular/forms';

export type PostFormType = {
  title: FormControl<string | null>;
  caption: FormControl<string | null>;
  categories: FormControl<string | null>;
  comment: FormControl<string | null>;
};

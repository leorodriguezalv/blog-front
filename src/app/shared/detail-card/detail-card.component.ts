import { Component, Input } from '@angular/core';
import {
  PostDetails,
  PostInfo,
} from '../../modules/manage-post/interfaces/post.interfaces';
import { CommentsService } from '../../modules/manage-post/services/comments.service';
import { CommentsList } from '../../modules/manage-post/interfaces/comments.interface';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { finalize, Subject, takeUntil } from 'rxjs';
import { PostFormBuild } from './utils/detail-form-build';
import { PostFormType } from '../interfaces/form.interfaces';
import { GetCommentToSave } from './utils/formar-comment-to-save';

@Component({
  selector: 'blog-detail-card',
  standalone: false,
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss',
})
export class DetailCardComponent {
  public readonly destroy$: Subject<void> = new Subject();
  @Input()
  postInfo: PostInfo | undefined;
  edition: boolean = false;
  isAddingComment = false;
  commentsList: CommentsList[] = [];
  postForm!: FormGroup<PostFormType>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly commentsService: CommentsService
  ) {
    this.postForm = PostFormBuild.build(this.fb);
  }

  ngOnInit() {}

  ngOnChanges() {
    this.getComments();
    console.log(this.postInfo);
  }

  private getComments() {
    this.commentsService
      .getComments(this.postInfo?.postId ?? 1)
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => (this.commentsList = list));
  }

  editar() {
    this.edition = true;
  }

  guardarComentario() {
    const comment = this.postForm.controls.comment.getRawValue() ?? '';
    const commentBody = GetCommentToSave.handle(comment, this.postInfo!);
    this.commentsService
      .createComment(commentBody)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isAddingComment = false;
          this.getComments();
        })
      )
      .subscribe();
  }
  cancelComment() {
    this.isAddingComment = false;
    this.postForm.controls.comment.setValue('', {
      emitEvent: false,
      onlySelf: true,
    });
  }

  private destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private ngOnDestroy() {
    this.destroy();
  }
}

import { Component, signal } from '@angular/core';
import { PostsService } from '../manage-post/services/posts.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { PostInfo } from '../manage-post/interfaces/post.interfaces';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public readonly destroy$: Subject<void> = new Subject();
  public showDetails: boolean = false;
  public selectedPost: PostInfo | undefined;

  posts = signal<PostInfo[]>([]);

  get postArray() {
    return this.posts();
  }

  constructor(private readonly postService: PostsService) {}

  private ngOnInit() {
    this.getPostFromApi();
  }

  private getPostFromApi(): void {
    this.postService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((newPosts: PostInfo[]) => this.setPost(newPosts));
  }

  private setPost(newPosts: PostInfo[]): void {
    this.posts.set(newPosts);
  }

  public showPostDetails(postId: number) {
    this.showDetails = true;
    this.selectedPost = this.postArray.find((p) => p.postId === postId);
  }

  private destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private ngOnDestroy() {
    this.destroy();
  }
}

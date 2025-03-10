import { Component } from '@angular/core';
import { PostsService } from '../../modules/manage-post/services/posts.service';

@Component({
  selector: 'blog-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  providers: [PostsService],
})
export class ToolbarComponent {
  constructor(private readonly postService: PostsService) {}
  goToUsers() {
    console.log('go to Users');
  }

  goToHome() {
    console.log('go to home');
  }

  goToManagePost() {}
}

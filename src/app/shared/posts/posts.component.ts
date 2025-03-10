import { Component, Input } from '@angular/core';
import { PostInfo } from '../../modules/manage-post/interfaces/post.interfaces';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  @Input() postinfo: PostInfo = {} as PostInfo;
}

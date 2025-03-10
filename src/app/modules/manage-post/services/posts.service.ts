import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../shared/constants/url';
import {
  BodyCreatePost,
  BodyUpdatePost,
  PostInfo,
} from '../interfaces/post.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly http: HttpClient) {}

  getPosts() {
    const url = `${BASE_URL}Posts`;
    return this.http.get<PostInfo[]>(url);
  }

  createPost(body: BodyCreatePost) {
    const url = `${BASE_URL}Posts/create`;
    return this.http.post<number>(url, body);
  }

  updatePost(body: BodyUpdatePost, postId: number) {
    const url = `${BASE_URL}Posts/update/${postId}`;
    return this.http.put(url, body);
  }

  deletePost(postId: number) {
    const url = `${BASE_URL}Posts/delete/${postId}`;
    return this.http.delete(url);
  }
}

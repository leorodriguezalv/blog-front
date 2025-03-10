import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BodyCreateComment,
  CommentsList,
} from '../interfaces/comments.interface';
import { BASE_URL } from '../../../shared/constants/url';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private readonly http: HttpClient) {}

  createComment(body: BodyCreateComment) {
    const url = `${BASE_URL}Comments/create`;
    return this.http.post<number>(url, body);
  }

  getComments(postId: number) {
    const url = `${BASE_URL}Comments/post/${postId}`;
    return this.http.get<CommentsList[]>(url);
  }
}

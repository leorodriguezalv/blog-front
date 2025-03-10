import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostsComponent } from './posts/posts.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const COMMON = [
  ToolbarComponent,
  PostsComponent,
  DetailCardComponent,
  FooterComponent,
];
@NgModule({
  declarations: [...COMMON],
  imports: [CommonModule, PrimengModule, HttpClientModule, ReactiveFormsModule],
  exports: [...COMMON, PrimengModule],
})
export class SharedModule {}

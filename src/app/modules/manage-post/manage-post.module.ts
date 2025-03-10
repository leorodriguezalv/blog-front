import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostRoutingModule } from './manage-post-routing.module';
import { ManagePostComponent } from './manage-post.component';


@NgModule({
  declarations: [
    ManagePostComponent
  ],
  imports: [
    CommonModule,
    ManagePostRoutingModule
  ]
})
export class ManagePostModule { }

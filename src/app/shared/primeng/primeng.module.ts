import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

const COMMON = [
  ButtonModule,
  ToolbarModule,
  AvatarModule,
  AvatarGroupModule,
  DataViewModule,
  CardModule,
  TagModule,
  DialogModule,
  InputTextModule,
  TextareaModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...COMMON],
  exports: [...COMMON],
  providers: [],
})
export class PrimengModule {}

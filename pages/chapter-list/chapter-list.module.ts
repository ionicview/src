import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapterList } from './chapter-list';

@NgModule({
  declarations: [
    ChapterList,
  ],
  imports: [
    IonicPageModule.forChild(ChapterList),
  ],
  exports: [
    ChapterList
  ]
})
export class ChapterListModule {}

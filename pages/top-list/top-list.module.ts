import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopList } from './top-list';

@NgModule({
  declarations: [
    TopList,
  ],
  imports: [
    IonicPageModule.forChild(TopList),
  ],
  exports: [
    TopList
  ]
})
export class TopListModule {}

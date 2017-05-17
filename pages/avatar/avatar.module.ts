import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Avatar } from './avatar';

@NgModule({
  declarations: [
    Avatar,
  ],
  imports: [
    IonicPageModule.forChild(Avatar),
  ],
  exports: [
    Avatar
  ]
})
export class AvatarModule {}

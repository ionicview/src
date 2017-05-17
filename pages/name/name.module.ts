import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Name } from './name';

@NgModule({
  declarations: [
    Name,
  ],
  imports: [
    IonicPageModule.forChild(Name),
  ],
  exports: [
    Name
  ]
})
export class NameModule {}

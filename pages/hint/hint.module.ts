import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hint } from './hint';

@NgModule({
  declarations: [
    Hint,
  ],
  imports: [
    IonicPageModule.forChild(Hint),
  ],
  exports: [
    Hint
  ]
})
export class HintModule {}

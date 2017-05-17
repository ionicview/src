import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionReflect } from './solution-reflect';

@NgModule({
  declarations: [
    SolutionReflect,
  ],
  imports: [
    IonicPageModule.forChild(SolutionReflect),
  ],
  exports: [
    SolutionReflect
  ]
})
export class SolutionReflectModule {}

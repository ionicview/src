import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reflection } from './reflection';

@NgModule({
  declarations: [
    Reflection,
  ],
  imports: [
    IonicPageModule.forChild(Reflection),
  ],
  exports: [
    Reflection
  ]
})
export class ReflectionModule {}

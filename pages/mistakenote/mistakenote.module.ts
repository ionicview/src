import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mistakenote } from './mistakenote';

@NgModule({
  declarations: [
    Mistakenote,
  ],
  imports: [
    IonicPageModule.forChild(Mistakenote),
  ],
  exports: [
    Mistakenote
  ]
})
export class MistakenoteModule {}

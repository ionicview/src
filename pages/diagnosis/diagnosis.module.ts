import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Diagnosis } from './diagnosis';

@NgModule({
  declarations: [
    Diagnosis,
  ],
  imports: [
    IonicPageModule.forChild(Diagnosis),
  ],
  exports: [
    Diagnosis
  ]
})
export class DiagnosisModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoiceQuestions } from './choice-questions';

@NgModule({
  declarations: [
    ChoiceQuestions,
  ],
  imports: [
    IonicPageModule.forChild(ChoiceQuestions),
  ],
  exports: [
    ChoiceQuestions
  ]
})
export class ChoiceQuestionsModule {}

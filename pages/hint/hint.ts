import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Answer } from '../answer/answer';
import { Content } from 'ionic-angular';

/**
 * Generated class for the Hint page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hint',
  templateUrl: 'hint.html',
})
export class Hint {
questionHintList:any;
hintIndex:String;
@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hintIndex = '001';
    this.questionHintList = [
                {
                  questionHintId:'001',
                  questionHintName:'(1) 提示',
                  hintCount:1,
                  hintQuestions:[
                       {
                            questionName: '提示1',
                            questionId: 'i1001',
                            question: "分析题目，根据现有已知条件，可使用平行四边形的哪个判定定理来证明四边形POMN是平行四边形？",
                            img:'',
                            questionType: 'singleChoice',
                            selectAId: 'A',
                            selectAContent: '两组对边分别平行',
                            selectAStatus:'selectBefore',
                            selectBId: 'B',
                            selectBContent: '一组对边平行且相等',
                            selectBStatus:'selectBefore',
                            selectCId: 'C',
                            selectCContent: '两组对边分别相等',
                            selectCStatus:'selectBefore',
                            selectDId: 'D',
                            selectDContent: '对角线互相平分',
                            selectDStatus:'selectBefore',
                            showFlag: false,
                            clickFlag:'',
                            answer: 'D'
                      },
                      {
                            questionName: '提示2',
                            questionId: 'i1002',
                            question: ' 如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(~~~~~~~~)',
                            img:'assets/img/test/chapter1/53_bsd_8x_p2-5_t.svg',
                            questionType: 'singleChoice',
                            selectAId: 'A',
                            selectAContent: '0个',
                            selectAStatus:'selectBefore',
                            selectBId: 'B',
                            selectBContent: '1个',
                            selectBStatus:'selectBefore',
                            selectCId: 'C',
                            selectCContent: '2个',
                            selectCStatus:'selectBefore',
                            selectDId: 'D',
                            selectDContent: '3个',
                            selectDStatus:'selectBefore',
                            showFlag: false,
                            clickFlag:'',
                            answer: 'D'
                      }

                  ]

                } 
          ]
  }

  selectClickEvent(question,index) {
      question.clickFlag = index;
      question.showFlag = true;
     if (question.selectAId == index)
  {
    question.selectAStatus ="selectAfter";
    question.selectBStatus ="selectBefore";
    question.selectCStatus ="selectBefore";
    question.selectDStatus ="selectBefore";

  }
  else if (question.selectBId == index){
    question.selectAStatus ="selectBefore";
    question.selectBStatus ="selectAfter";
    question.selectCStatus ="selectBefore";
    question.selectDStatus ="selectBefore";
  }
  else if (question.selectCId == index){
    question.selectAStatus ="selectBefore";
    question.selectBStatus ="selectBefore";
    question.selectCStatus ="selectAfter";
    question.selectDStatus ="selectBefore";
  }
  else if (question.selectDId == index){
    question.selectAStatus ="selectBefore";
    question.selectBStatus ="selectBefore";
    question.selectCStatus ="selectBefore";
    question.selectDStatus ="selectAfter";
  }


    if(question.selectAId == question.answer)
    {
      question.selectAStatus ="selectAfterIsTrue";
    } 
    else if (question.selectBId == question.answer)
    {
      question.selectBStatus ="selectAfterIsTrue";
    }
    else if (question.selectCId == question.answer)
    {
      question.selectCStatus ="selectAfterIsTrue";
    }
    else if (question.selectDId == question.answer)
    {
      question.selectDStatus ="selectAfterIsTrue";
    }

    if ( question.selectAStatus =="selectAfter" 
        && question.selectAId != question.answer)
    {
      question.selectAStatus ="selectAfterIsFalse";
    }
    if ( question.selectBStatus =="selectAfter" 
        && question.selectBId != question.answer)
    {
      question.selectBStatus ="selectAfterIsFalse";
    }
    if ( question.selectCStatus =="selectAfter" 
        && question.selectCId != question.answer)
    {
      question.selectCStatus ="selectAfterIsFalse";
    }
    if ( question.selectDStatus =="selectAfter" 
        && question.selectDId != question.answer)
    {
      question.selectDStatus ="selectAfterIsFalse";
    }
      console.log("click is", index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hint');
  }

  hintCountEvent(questionHint) {
    console.log('click Hint add');
      questionHint.hintCount = questionHint.hintCount + 1;
    this.content.scrollTo(0,600);
      //this.ngAfterViewInit();
  }
  ngAfterViewInit() {
      //this.slides.autoHeight = true;
  }

    //跳转到答案画面
  goAnswer(question){

    this.navCtrl.push(Answer,{
      question:question
    });
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

}

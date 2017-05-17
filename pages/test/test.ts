import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, LoadingController,ViewController} from 'ionic-angular';
import { Hint } from '../hint/hint';
import { SolutionReflect } from '../solution-reflect/solution-reflect';
import { Answer } from '../answer/answer';

import { QuestionService } from '../../service/QuestionService';

/**
declare var require: any;
var mjAPI = require("mathjax-node");
require('child_process');
mjAPI.config({
  MathJax: {
             showProcessingMessages: false,
         tex2jax: { inlineMath: [['$','$'],['\\(','\\)']] }
  }
});
mjAPI.start();
 */

/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {
  @ViewChild(Slides) slides: Slides;
  testId : String ;
  testName : String;
  question1 : String;
  currentNumber:number;
  //
  questionList: any;
  currentQuestion:any;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public viewCtrl: ViewController,
                public qsService:QuestionService) {
    this.testId = navParams.get('testId');
    this.testName = navParams.get('testName');
    this.questionList = qsService.getQuestionList();
    console.debug(this.questionList.length);
}

fillBlankPrompt(){
    let alert = this.alertCtrl.create({
    title: '输入填空',
    inputs: [
      {
        name: 'blank1',
        placeholder: '空1'
      }
    ],
    buttons: [
      {
        text: '确定',
        handler: data => {
          let currentIndex = this.slides.getActiveIndex();
          this.questionList[currentIndex].filledBlank1 =  data.blank1;
          this.questionList[currentIndex].fillBlankStatus= 'fillBlankAnswerAfter';
        }
      }
    ]
  });
  alert.present();
}

ngOnInit() {
  this.currentNumber = 1;
  this.currentQuestion = this.questionList[0];
    //this.presentLoading();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Test');
  }
presentLoading() {
let loader = this.loadingCtrl.create({
    content: '努力加载中...',
    spinner: 'dots',
    showBackdrop:false,
    cssClass:'loading-ios-background',
    duration: 300
    });
    loader.present();
    setTimeout(() => {
        loader.dismiss();
    }, 5000);
}

goToSlide() {
  this.slides.slideTo(2, 500);
}

slideChanged() {
  this.currentNumber =1;
  let currentIndex = this.slides.getActiveIndex();
  if(currentIndex < this.questionList.length){
    this.currentNumber = currentIndex+1;
  } else {
    this.currentNumber = currentIndex;
    currentIndex = currentIndex - 1
}

this.currentQuestion = this.questionList[currentIndex];
console.log("Current index is", currentIndex);
}

ngAfterViewInit() {
    this.slides.autoHeight = true;
}

autoCorrecting(question) {
    if (question == null)
    {
     question = this.questionList[0];
    }
    question.showFlag = true;
    
    if(question.questionType == "fillBlank"){
      if( question.answer == question.filledBlank1){
        question.fillBlankStatus="fillBlankIsTrue";
      }else{
        question.fillBlankStatus="fillBlankIsFalse";
      }
      return;
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

    

    //question.clickFlag = index;
    console.log("answer is", question.answer);
}

selectClickEvent(question,index) {
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
    //question.clickFlag = index;
    console.log("click is", index);
}

promptEvent(question) {

    if (question.promptCount >= question.prompts.length) {
        this.presentAlert();
    } else {
        question.promptCount = question.promptCount + 1;
        this.ngAfterViewInit();
    }
    console.log("prompt is", question.promptCount);

}
presentAlert() {
let alert = this.alertCtrl.create({
        title: '温馨提示',
        subTitle: '你的提示用完啦！',
        buttons: ['知道了']
    });
    alert.present();
}

favoritesAlert(currentQuestion) {
  let favoritesStr : any;

  if(!currentQuestion.favorites){
    favoritesStr='已收藏';
    currentQuestion.favorites = true;
  } else {
      favoritesStr='已取消收藏';
    currentQuestion.favorites = false;
  }
  let alert = this.alertCtrl.create({
        title: favoritesStr
    });
    alert.present();
    setTimeout(() => {
    alert.dismiss();
       }, 1000);
}

  //跳转到提示画面
  goHint(question){
　　if (question == null)
    {
     question = this.questionList[0];
    }
    this.navCtrl.push(Hint,{
      question:question
    });
  }

//跳转到解题反思画面
  goSolutionReflect(question){
    if (question == null)
    {
     question = this.questionList[0];
    }
    this.navCtrl.push(SolutionReflect,{
      question:question
    });
  }

  //跳转到答案画面
  goAnswer(question){
    if (question == null)
    {
     question = this.questionList[0];
    }
    this.navCtrl.push(Answer,{
      question:question
    });
  }

  testPageClose(){
        let alert = this.alertCtrl.create({
          title: '',
          message: '退出练习?',
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              handler: () => {
                console.log('取消');
              }
            },
            {
              text: '退出练习',
              handler: () => {
                this.dismiss();
                console.log('退出练习');
              }
            }
          ]
        });
        alert.present();
  }

  dismiss() {
        this.viewCtrl.dismiss(
        );
    }

}

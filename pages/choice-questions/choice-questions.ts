import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Test } from '../test/test';
import { Discover } from '../discover/discover';


/**
 * Generated class for the ChoiceQuestions page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choice-questions',
  templateUrl: 'choice-questions.html',
})
export class ChoiceQuestions {
  treeList:any;
  sectionId : String ;
  sectionName : String ;

  testId : String ;
  testName : String ;



  constructor(public navCtrl: NavController, public navParams: NavParams
              ,public modalCtrl: ModalController) {
    this.sectionId = navParams.get('sectionId');
    this.sectionName = navParams.get('sectionName');

    this.treeList = [
      {
        questionLevleId: 1,
        questionLevleName: '基础闯关全练',
        showFlag: true,
        knowledges : [
          {
            knowledgeId: 1,
            knowledgeName: '知识点一 菱形的定义',
            showFlag: false,
            questions:[
                         {
                          questionId:1001,
                          questionName:'第一题',
                          finishFlag:true
                          },
                          {
                           questionId:1002,
                           questionName:'第二题',
                          finishFlag:false
                           }
                      ]
          },
          {
            knowledgeId: 2,
            knowledgeName: '知识点二 菱形的性质',
            showFlag: false,
            questions:[
                         {
                          questionId:1001,
                          questionName:'第一题',
                          finishFlag:false
                          },
                          {
                           questionId:1002,
                           questionName:'第二题',
                           finishFlag:false
                           }
                      ]
          }
        ]
      },
      {
        questionLevleId: 1,
        questionLevleName: '三年模拟全练',
        showFlag: true,
        knowledges : [
          {
            knowledgeId: 1,
            knowledgeName: '知识点一 矩形的定义',
            showFlag: false,
            questions:[
                         {
                          questionId:1001,
                          questionName:'第一题',
                          finishFlag:false
                          },
                          {
                           questionId:1002,
                           questionName:'第二题',
                           finishFlag:false
                           }
                      ]
          },
          {
            knowledgeId: 2,
            knowledgeName: '知识点二 矩形的性质',
            showFlag: false,
            questions:[
                         {
                          questionId:1001,
                          questionName:'第一题',
                          finishFlag:false
                          },
                          {
                           questionId:1002,
                           questionName:'第二题',
                           finishFlag:false
                           }
                      ]
          },
          {
            knowledgeId: 3,
            knowledgeName: '知识点三 函数',
            showFlag: false,
            questions:[
                         {
                          questionId:1001,
                          questionName:'第一题',
                          finishFlag:false
                          },
                          {
                           questionId:1002,
                           questionName:'第二题',
                           finishFlag:false
                           }
                      ]
          }
        ]
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoiceQuestions');
  }

  chapterEvent(item) {
    //this.visible = !this.visible;
    item.showFlag = !item.showFlag;
    //alert(item.chapterName);
  }
 presentContactModal() {
   let contactModal = this.modalCtrl.create(Test);
   contactModal.present();
 }

 presentProfileModal(question,knowledge,questionLevle) {
   let profileModal = this.modalCtrl.create(Test, {       
     testId:question.questionId,
      testName:questionLevle.questionLevleName });
   profileModal.onDidDismiss(data => {
     console.log(data);
   });
   profileModal.present();
 }
  //跳转到做题画面
  goTest(question,knowledge,questionLevle){
    //this.navCtrl.push(Test,{
      //testId:question.questionId,
      //testName:questionLevle.questionLevleName
   // });
   this.presentProfileModal(question,knowledge,questionLevle);
  }

  //跳转到发现画面
  goDiscover(section){
    this.navCtrl.push(Discover,{
      //testId:section.sectionId,
      //testName:section.sectionName,
      //name:"grey",
      //job:"IT"
    });
  }



}

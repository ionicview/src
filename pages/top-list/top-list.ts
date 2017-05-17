import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ModalController  } from 'ionic-angular';
import { Test } from '../test/test';

/**
 * Generated class for the TopList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-top-list',
  templateUrl: 'top-list.html',
})
export class TopList {
  top:any;
  questions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {
  this.top = navParams.get('top');
  this.questions = this.top.questions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopList');
  }
  ngOnInit() {
      //this.presentLoading();
  }
  //跳转到做题画面
  goTest(question){
    //this.navCtrl.push(Test,{
      //testId:question.questionId,
      //testName:questionLevle.questionLevleName
   // });
   this.presentProfileModal(question);
  }
  presentLoading() {
  let loader = this.loadingCtrl.create({
      content: '努力加载中...',
      spinner: 'dots',
    cssClass:'loading-ios-background',

      duration: 2000
      });
      loader.present();
      setTimeout(() => {
          loader.dismiss();
      }, 5000);
  }
   presentProfileModal(question) {
   let profileModal = this.modalCtrl.create(Test, {       
     testId:question.questionId,
      testName:question.questionName });
   profileModal.onDidDismiss(data => {
     console.log(data);
   });
   profileModal.present();
 }

}

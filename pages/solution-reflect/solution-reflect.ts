import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SolutionReflect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-solution-reflect',
  templateUrl: 'solution-reflect.html',
})
export class SolutionReflect {
  solutionReflectList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.solutionReflectList = [
                    {
                      solutionReflectId: 1,
                      solutionReflectName: '解题反思名称1',
                      solutionReflect: '解题反思内容1',
                      solutionReflectOfUserName: '路飞',
                      solutionReflectOfUserAvatar: 'assets/img/lufei.png',
                      solutionReflectOfTime: '1天前'
                    },
                    {
                      solutionReflectId: 2,
                      solutionReflectName: '解题反思名称2',
                      solutionReflect: '解题反思内容2',
                      solutionReflectOfUserName: '乔巴',
                      solutionReflectOfUserAvatar: 'assets/img/qiaoba.png',
                      solutionReflectOfTime: '2天前'
                    }
                  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolutionReflect');
  }

}

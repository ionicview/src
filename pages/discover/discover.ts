import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopList } from '../top-list/top-list';

/**
 * Generated class for the Discover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class Discover {
  topList:any;
  top:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.topList = [
                    {
                      topId: 1,
                      topName: '点击提示最多的5道题',
                      questions: [
                                      {
                                          questionId: 1,
                                          questionName: '题名称1',
                                          question: '若等腰三角形的顶角为$40^{\\circ}$，则它的底角度数为（）'
                                      },
                                      {
                                          questionId: 2,
                                          questionName: '题名称2',
                                          question: ' 如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(~~~~~~~~)'
                                      }
                                  ]
                    },
                    {
                      topId: 2,
                      topName: '发表解题反思最多的5道题',
                      questions: [
                                      {
                                          questionId: 1,
                                          questionName: '题名称1',
                                          question: '若等腰三角形的顶角为$40^{\\circ}$，则它的底角度数为（）'
                                      },
                                      {
                                          questionId: 2,
                                          questionName: '题名称2',
                                          question: ' 如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(~~~~~~~~)'
                                      }
                                  ]
                    }
                  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Discover');
  }

  goTopListpage(topPram) {
  this.navCtrl.push(TopList,{
    top:topPram
  });
  }

}

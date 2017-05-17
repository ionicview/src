import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Test } from '../test/test';

/**
 * Generated class for the Mistakenote page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mistakenote',
  templateUrl: 'mistakenote.html',
})
export class Mistakenote {
  
  questions : any;
  questioncount : number;
  chapters: any;
  question1 : String;
  sortby : String;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public modalCtrl: ModalController) {

    this.sortby = "time";
    

    this.question1 = "`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    this.question1 += "\$\$\\exp x = \\sum_{n=0}^{\\infty}\\frac{1}{n!}x^{n}$$";
    this.question1 += "\$\$\\begin\{aligned\} ";
    this.question1 += "\\dot\{x\} &amp; = \\sigma(y-x) \\\\";
    this.question1 += "\\dot\{y\} &amp; = \\rho x - y - xz \\newline";
    this.question1 += "\\dot\{z\} &amp; = -\\beta z + xy ";
    this.question1 += "\\end\{aligned\}\$\$";
    this.question1 += "\$\$\\mathbf\{V\}\_1 \\times \\mathbf\{V\}\_2 = \\begin\{vmatrix\}";
    this.question1 += "\\mathbf\{i\} \&amp; \\mathbf\{j\} &amp\; \\mathbf\{k\} \\newline";
    this.question1 += "\\frac\{\\partial X\}\{\\partial u\} \&amp\;  \\frac\{\\partial Y\}\{\\partial u\} \&amp\; 0 \\newline";
    this.question1 += "\\frac\{\\partial X\}\{\\partial v\} \&amp\;  \\frac\{\\partial Y\}\{\\partial v\} \&amp\; 0";
    this.question1 += "\\end\{vmatrix\}\$\$";
    this.question1 += "\$\$x = \{-b \\pm \\sqrt\{b^2-4ac\} \\over 2a\}\$\$";

    this.chapters = [
      {
        chapter : "第一章集合",
        sections : [
          {
            section : "1.1集合的含义和表示",
            questions : [0]
          }
        ],
        isShow : true,
        questions : 1
      },
      {
        chapter : "第二章函数",
        sections : [
          {
            section : "1.2函数的连续性",
            questions : [1]
          }
        ],
        isShow : true,
        questions : 1
      }
    ];

    this.questions = [
      {
        datetime : "20170201",
        question : "如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(~~~~~~~~)",
        answer : [
          {selectionname : "A", selectioncontent : "aaaaaa", isCollect : false},
          {selectionname : "B", selectioncontent : "bbbbbb", isCollect : false},
          {selectionname : "C", selectioncontent : "cccccc", isCollect : false},
          {selectionname : "D", selectioncontent : "dddddd", isCollect : true}
        ],
        chapter : "第一章集合",
        section : "1.1集合的含义和表示",
        likes : 5,
        isShow : true
      },
      {
        datetime : "20170203",
        question : this.question1,
        answer : [
          {selectionname : "A", selectioncontent : "aaaaaa", isCollect : false},
          {selectionname : "B", selectioncontent : "bbbbbb", isCollect : false},
          {selectionname : "C", selectioncontent : "cccccc", isCollect : true},
          {selectionname : "D", selectioncontent : "dddddd", isCollect : false}
        ],
        chapter : "第二章函数",
        section : "1.2函数的连续性",
        likes : 6,
        isShow : true
      }
    ];

    this.questioncount = this.questions.length;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mistakenote');
  }

  toggle(item) {
    item.isShow = !item.isShow;
  }

  //跳转到做题画面
  goTest(){
    // this.navCtrl.push(Test,{
    // });
    let profileModal = this.modalCtrl.create(Test, {
      testId:2,
      testName:'单选题2'}
    );
    profileModal.onDidDismiss(data => {console.log(data);});
    profileModal.present();
  }

}

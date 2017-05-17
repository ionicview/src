import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Test } from '../test/test';

/**
 * Generated class for the Favorites page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
  styles: [
  `
  .my-class {
    hidden;
  }
  `
  ]
})



export class Favorites {

  sortType : String;
  favoriteList : any;
  isClassVisible: boolean;
  chapters : any;


  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public modalCtrl: ModalController) {

    this.isClassVisible = true;
    let content2 = "";
    content2 += "`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    content2 += "\$\$\\exp x = \\sum_{n=0}^{\\infty}\\frac{1}{n!}x^{n}$$";
    content2 += "\$\$\\begin\{aligned\} ";
    content2 += "\\dot\{x\} &amp; = \\sigma(y-x) \\\\";
    content2 += "\\dot\{y\} &amp; = \\rho x - y - xz \\newline";
    content2 += "\\dot\{z\} &amp; = -\\beta z + xy ";
    content2 += "\\end\{aligned\}\$\$";
    content2 += "\$\$\\mathbf\{V\}\_1 \\times \\mathbf\{V\}\_2 = \\begin\{vmatrix\}";
    content2 += "\\mathbf\{i\} \&amp; \\mathbf\{j\} &amp\; \\mathbf\{k\} \\newline";
    content2 += "\\frac\{\\partial X\}\{\\partial u\} \&amp\;  \\frac\{\\partial Y\}\{\\partial u\} \&amp\; 0 \\newline";
    content2 += "\\frac\{\\partial X\}\{\\partial v\} \&amp\;  \\frac\{\\partial Y\}\{\\partial v\} \&amp\; 0";
    content2 += "\\end\{vmatrix\}\$\$";
    content2 += "\$\$x = \{-b \\pm \\sqrt\{b^2-4ac\} \\over 2a\}\$\$";

    this.sortType = 'sortbytime';
    this.favoriteList = [
      { id:1,
        datetime:'20170233',
        question:'如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(~~~~~~~~)',
        chapter : "第一章集合",
        section : "1.1集合的含义和表示",
        likes : 5
      },
      { id:2,
        datetime:'20170218',
        question:content2,
        chapter : "第二章函数",
        section : "1.2函数的连续性",
        likes : 6
      }
    ];

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorites');
  }

  ngAfterViewInit() {
    //this.isClassVisible = true;
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

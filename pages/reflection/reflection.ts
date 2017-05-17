import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Test } from '../test/test';

/**
 * Generated class for the Reflection page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reflection',
  templateUrl: 'reflection.html',
})
export class Reflection {

  likescount : number;
  reflectioncount : number;
  reflections : any;
  question1 : String;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public modalCtrl: ModalController) {

    this.likescount = 11;
    this.reflectioncount = 2;
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

    this.reflections = [
      {
        datetime : "20170201",
        question : "如图，$\\triangle ABC$中，$\\angle A= 36^{\\circ}$，$\\angle B= 72^{\\circ}$，$\\angle ACB$的平分线交$AB$于$D$，则图中共有等腰三角形(~~~~~~~~)",
        reflection : "这道题太简单了",
        likes : 5
      },
      {
        datetime : "20170201",
        question : this.question1,
        reflection : "这道题太难了",
        likes : 6
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reflection');
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

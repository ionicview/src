import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the Start page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class Start {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.slides = [
      {
        title: '欢迎使用 <b>智能考试系统</b>',
        description: '',
        image: 'assets/img/hourglass.png',
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Start');
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

}
export interface Slide {
  title: string;
  description: string;
  image: string;
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class About {

  content : String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.content = "优胜，悠然，学而无厌。心静，欣然，傲于心间";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

}

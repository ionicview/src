import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the Name page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class Name {

  name: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.name = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Name');
  }

  save() {
    this.navCtrl.push(ProfilePage,{
        name : this.name
    })
  }

}

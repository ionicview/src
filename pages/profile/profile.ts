import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App} from 'ionic-angular';
import { Avatar } from '../avatar/avatar';
import { Name } from '../name/name';
import { Password } from '../password/password';
import { Login } from '../login/login';
import { About } from '../about/about';
import { Favorites } from '../favorites/favorites';
import { Reflection } from '../reflection/reflection';
import { Mistakenote} from '../mistakenote/mistakenote';
import { Diagnosis } from '../diagnosis/diagnosis';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  name : String;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public alerCtrl: AlertController, 
  public app : App) {

    // get value from service
    this.name = "wang san"; 

  }

  //跳转到头像修改画面
  gotoAvatar(){
    this.navCtrl.push(Avatar,{
    });
  }

  //跳转到昵称修改画面
  gotoName(){
    this.navCtrl.push(Name,{
      name : this.name
    });
  }

  //跳转到密码修改画面
  gotoPassowrd(){
    this.navCtrl.push(Password,{
    });
  }

  //跳转到我的收藏夹修改画面
  gotoFavorites(){
    this.navCtrl.push(Favorites,{
    });
  }

  //跳转到解题反思画面
  gotoReflection(){
    this.navCtrl.push(Reflection,{
    });
  }

  //跳转到错题本画面
  gotoMistakenote(){
    this.navCtrl.push(Mistakenote,{
    });
  }

  gotoDiagnosis(){
    this.navCtrl.push(Diagnosis,{
    });
  }

  //跳转到关于优然学
  gotoAbout(){
    this.navCtrl.push(About,{
    });
  }

  //推出登陆
  gotoQuit(){
        let alert = this.alerCtrl.create({
            title: "退出登录",
            message: "你确定要退出？",
            buttons: [
                {
                    text: "取消"
                },
                {
                    text: "确定",
                    handler: data => {
                        //this.navCtrl.push(Login,{});
                        this.app.getRootNav().setRoot(Login);
                    }
                }
            ]
        });
        alert.present();
  }


}

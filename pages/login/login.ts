import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage,NavParams } from 'ionic-angular';
import { AuthService } from '../../service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { Register } from '../register/register';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loading: Loading;
  registerCredentials = { userId: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthService,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
//this.registerCredentials.userId = "wg";
//this.registerCredentials.password= "wg";
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  public createAccount() {
    console.log('Register');
    this.navCtrl.push(Register);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {

        if (allowed) {

          this.navCtrl.push(TabsPage);
        } else {
          console.log('aaaa');
          this.loading.dismiss();
          this.showError("登录失败！");
          console.log('bbbb');
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: '登陆中...',
      dismissOnPageChange: true
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  showError(text) {

    //this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: '温馨提示',
      subTitle: text,
      buttons: ['知道了']
    });

    alert.present(prompt);

  }


}

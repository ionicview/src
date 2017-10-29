import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage,NavParams,ToastController } from 'ionic-angular';
import { AuthService } from '../../service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { Register } from '../register/register';
import { AuthProvider } from "../../providers/auth/auth";
import { SignupPage } from "../signup/signup";

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
  username:string;
  password:string;
  loading: Loading;
  message: string;
  registerCredentials = { userId: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthService,private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    private readonly authProvider: AuthProvider,
    private readonly toastCtrl: ToastController,
  ) {
    this.username = 'admin';
    this.password = 'admin';
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

  login(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authProvider
      .login(value)
      .finally(() => loading.dismiss())
      .subscribe(
      () => { },
      err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string;
    
    console.log("error.status:"+error);
    if (error.status && error.status === 401) {

      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
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

  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}

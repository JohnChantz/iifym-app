import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {User} from "../../models/user";
import {HomePage} from "../home/home";
import {AngularFireAuth} from "angularfire2/auth";
import {RegisterPage} from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = {} as User;

  constructor(private navCtrl: NavController, private aFAuth: AngularFireAuth, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    console.log(`Authorizing user: ${this.user.username} , ${this.user.password}`);

    this.aFAuth.auth.signInWithEmailAndPassword(this.user.username, this.user.password)
      .then(result => {
        this.navCtrl.setRoot(HomePage, {
          user: this.user
        });

      })
      .catch(err => {
        console.log(err.message)
        this.showToastWithCloseButton(err.message);
      });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showToastWithCloseButton(errMessage: string) {
    const toast = this.toastCtrl.create({
      message: errMessage,
      showCloseButton: true,
      closeButtonText: 'Close',
      duration: 3000
    });
    toast.present();
  }
}

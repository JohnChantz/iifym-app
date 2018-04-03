import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {User} from "../../models/user";
import {HomePage} from "../home/home";
import {AngularFireAuth} from "angularfire2/auth";
import {RegisterPage} from "../register/register";
import {AngularFireDatabase} from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = {} as User;

  constructor(private navCtrl: NavController, private aFAuth: AngularFireAuth, private toastCtrl: ToastController, private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    console.log(`Authorizing user: ${this.user.username} , ${this.user.password}`);

    await this.aFAuth.auth.signInWithEmailAndPassword(this.user.username, this.user.password)
      .then(result => {
        this.navCtrl.setRoot(HomePage);
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
      duration: 5000
    });
    toast.present();
  }
}

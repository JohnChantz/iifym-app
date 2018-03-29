import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../models/user";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.username, this.user.password)
      .then(result => {
        this.navCtrl.setRoot(HomePage);

      }).catch(err => {
      console.log(err.message);
      this.showToastWithCloseButton(err.message);
    });
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

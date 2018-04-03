import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../models/user";
import {ProfilePage} from "../profile/profile";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private user = {} as User;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then(result => {
        this.navCtrl.setRoot(ProfilePage, {
          user: this.user
        });
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
      duration: 5000
    });
    toast.present();
  }
}

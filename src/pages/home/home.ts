import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {User} from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private user = {} as User;
  private calories: number;
  private caloriesCalculated: boolean = false;
  private boxChecked: boolean = false;
  private multiplier: number;
  private tdee: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  loadSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }

  checkValuesNotEmpty() {
    if (this.user.weight != null && this.user.height != null && this.user.age != null && this.user.gender != null) {
      return true
    } else {
      return false;
    }
  }

  calorieCalculator() {
    console.log(this.user.weight + " " + this.user.height + " " + this.user.age + " " + this.user.gender);
    let check = this.checkValuesNotEmpty();
    if (check) {
      if (this.user.gender == 'male') {
        console.log('Calculating for Male');
        this.calories = (10 * this.user.weight) + (6.25 * this.user.height) + (5 * this.user.age) + 5;
      } else if (this.user.gender == 'female') {
        console.log('Calculating for Female');
        this.calories = (10 * this.user.weight) + (6.25 * this.user.height) - (5 * this.user.age) - 161;
      }
      this.caloriesCalculated = true;
    } else {
      this.showToastWithCloseButton();

    }
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Please make sure you have fill in all the values!',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

  changeCheckBox() {
    console.log(this.boxChecked);
    if (this.boxChecked == false)
      this.boxChecked = true;
    else
      this.boxChecked = false;
    console.log(this.boxChecked);
  }

  tdeeCalculator() {
    this.tdee = this.calories * this.multiplier;
  }
}

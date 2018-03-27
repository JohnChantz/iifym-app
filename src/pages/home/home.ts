import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private weight: number;
  private height: number;
  private age: number;
  private gender: string;
  private calories: number;
  private caloriesCalculated: boolean = false;
  private boxChecked: boolean = false;
  private multiplier: number;
  private tdee: number;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }

  checkValuesNotEmpty() {
    if (this.weight != null && this.height != null && this.age != null && this.gender != null) {
      return true
    } else {
      return false;
    }
  }

  calorieCalculator() {
    console.log(this.weight + " " + this.height + " " + this.age + " " + this.gender);
    let check = this.checkValuesNotEmpty();
    if (check) {
      if (this.gender == 'male') {
        console.log('Calculating for Male');
        this.calories = (10 * this.weight) + (6.25 * this.height) + (5 * this.age) + 5;
      } else if (this.gender == 'female') {
        console.log('Calculating for Female');
        this.calories = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
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
  tdeeCalculator(){
    this.tdee = this.calories * this.multiplier;
  }
}

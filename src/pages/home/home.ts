import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private macros:any = ['protein: 40%','carbs: 40%','fat: 20%'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-macros',
  templateUrl: 'macros.html',
})
export class MacrosPage {

  private protein: number;
  private carbs: number;
  private fats: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MacrosPage');
  }

}

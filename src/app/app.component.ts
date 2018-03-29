import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav} from "ionic-angular";

import {HomePage} from "../pages/home/home";
import {BodystatsPage} from "../pages/bodystats/bodystats";
import {MacrosPage} from "../pages/macros/macros";
import {LoginPage} from "../pages/login/login";
import {ProfilePage} from "../pages/profile/profile";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;


  constructor(public menu: MenuController) {
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Body Stats', component: BodystatsPage},
      {title: 'IIFYM/Macros', component: MacrosPage},
      {title: 'Profile', component: ProfilePage}
    ];
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }


}


import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav} from "ionic-angular";

import {HomePage} from "../pages/home/home";
import {SettingsPage} from "../pages/settings/settings";
import {BodystatsPage} from "../pages/bodystats/bodystats";
import {MacrosPage} from "../pages/macros/macros";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{ title: string, component: any }>;


  constructor(public menu: MenuController) {
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Body Stats', component: BodystatsPage},
      {title: 'IIFYM/Macros', component: MacrosPage},
      {title: 'Settings', component: SettingsPage}
    ];
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }


}


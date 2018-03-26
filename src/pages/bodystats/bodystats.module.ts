import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BodystatsPage } from './bodystats';

@NgModule({
  declarations: [
    BodystatsPage,
  ],
  imports: [
    IonicPageModule.forChild(BodystatsPage),
  ],
})
export class BodystatsPageModule {}

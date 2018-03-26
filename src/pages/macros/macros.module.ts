import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MacrosPage } from './macros';

@NgModule({
  declarations: [
    MacrosPage,
  ],
  imports: [
    IonicPageModule.forChild(MacrosPage),
  ],
})
export class MacrosPageModule {}

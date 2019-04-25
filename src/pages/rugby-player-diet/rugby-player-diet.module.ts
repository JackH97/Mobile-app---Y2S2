import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RugbyPlayerDietPage } from './rugby-player-diet';

@NgModule({
  declarations: [
    RugbyPlayerDietPage,
  ],
  imports: [
    IonicPageModule.forChild(RugbyPlayerDietPage),
  ],
})
export class RugbyPlayerDietPageModule { }

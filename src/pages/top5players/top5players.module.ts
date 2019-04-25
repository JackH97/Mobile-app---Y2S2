import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Top5playersPage } from './top5players';

@NgModule({
  declarations: [
    Top5playersPage,
  ],
  imports: [
    IonicPageModule.forChild(Top5playersPage),
  ],
})
export class Top5playersPageModule { }

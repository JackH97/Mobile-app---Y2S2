import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-rugby-player-diet',
  templateUrl: 'rugby-player-diet.html',
})
export class RugbyPlayerDietPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RugbyPlayerDietPage');
  }
  // classes for buttons in .html page
  button1() {
    let url = 'https://www.sportsjoe.ie/rugby/rugby-diet-james-haskell-193337';
    window.open(url, '_blank');
  }
  button2() {
    let url = 'https://www.sportsjoe.ie/rugby/daily-diet-professional-rugby-player-chris-farrell-55152';
    window.open(url, '_blank');
  }

  button3() {
    let url = 'https://www.independent.ie/style/beauty/body/what-i-eat-in-a-day-leinster-and-ireland-rugby-star-dave-kearney-34700900.html';
    window.open(url, '_blank');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-top5players',
  templateUrl: 'top5players.html',
})
export class Top5playersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Top5playersPage');
  }
  // Different links to bring user to different videos when button is clicked on any profile in .html page
  bod1() {
    let url = 'https://www.youtube.com/watch?v=9JLASzADsaI';   
    window.open(url, '_blank');
  }
  jonah1() {
    let url = 'https://www.youtube.com/watch?v=yamhc4DaNKo';   
    window.open(url, '_blank');
  }
  richie1() {
    let url = 'https://www.youtube.com/watch?v=9Q1ZaTOXm8k';   
    window.open(url, '_blank');
  }
  dan1() {
    let url = 'https://www.youtube.com/watch?v=7vQO8feCWEU';   
    window.open(url, '_blank');
  }
  gareth1() {
    let url = 'https://www.youtube.com/watch?v=6j3UYslPOP4';   
    window.open(url, '_blank');
  }

}

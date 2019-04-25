import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  information: string;
  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  openStatusPage() {
    this.navCtrl.push("StatusPage");
  }
// class for github button
  gitlink() {
    let url = 'https://github.com/JackH97';
    window.open(url, '_blank');
  }


  ionViewWillEnter() {
    this.storage.get("status").then((val) => {
      this.information = val;

    }).catch((err) => {
      console.log(err);
    })



  }

}

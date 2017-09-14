import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  email:string;
  constructor(private fireAuth:AngularFireAuth,public navCtrl: NavController, 
    public navParams: NavParams,public platformCtrl:Platform) {
  // navCtrl.remove(0);
  this.email=fireAuth.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }


  popPage() {
    console.log(this.navCtrl.getByIndex(0));
    // if((this.navCtrl.getPrevious()).is)
    // this.navCtrl.pop();
    this.platformCtrl.exitApp();
  }

}

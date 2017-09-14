import { FirstPage } from './../first/first';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') userName;
  @ViewChild('password') password;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  signIn() {
    if ((this.userName.value) && (this.password.value)) 
    this.navCtrl.push(FirstPage);
    else
    this.presentToast();
    // if (this.userName.value == "abc" && this.password.value == "abc") {
    //   this.showAlert();
    // } else {
    //   this.presentToast();
    // }
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Please enter the values",
      duration: 3000
    });
    toast.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Login SuccessFully',
      buttons: ['OK']
    });
    alert.present();
  }

}

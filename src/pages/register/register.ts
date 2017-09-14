import { AngularFireAuth } from 'angularfire2/auth';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('regEmail') regEmail;
  @ViewChild('regpassword') regPassword;

  constructor(private fireCtrl: AngularFireAuth, public navCtrl: NavController,
    public navParams: NavParams, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerButton() {
    let isValid = true;
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!regExp.test(this.regEmail.value)) {
      isValid = false;
      this.presentToast("Please enter the valid email");
    } else if ((this.regPassword.value).length < 8) {
      isValid = false;
      this.presentToast("Password length must be greater than 8");
    }

    if (isValid) {
      let loader = this.presentLoading();
      this.fireCtrl.auth.createUserWithEmailAndPassword(this.regEmail.value, this.regPassword.value)
        .then(data => {
          console.log("got data" + data);
          loader.dismiss();
        }).catch(error => {
          console.log(error);
          loader.dismiss();
          this.showAlert(error.message);
        });
    }
  }

  presentToast(a: string) {
    let toast = this.toastCtrl.create({
      message: a,
      duration: 3000
    });
    toast.present();
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    return loader;
  }

}

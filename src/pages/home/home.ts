import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from './../register/register';
import { FirstPage } from './../first/first';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('email') userName;
  @ViewChild('password') password;


  constructor(private frieCtrl: AngularFireAuth, public navCtrl: NavController,
    public toastCtrl: ToastController, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

  }

  signIn() {
    let isValid = true;
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!regExp.test(this.userName.value)) {
      isValid = false;
      this.presentToast("Please enter the valid email");
    } else if ((this.password.value).length == 0) {
      isValid = false;
      this.presentToast("Please enter the Password");
    }

    if (isValid) {
      let loader = this.presentLoading();
      this.frieCtrl.auth.signInWithEmailAndPassword(this.userName.value, this.password.value)
        .then(data => {
          console.log(data);
          loader.dismiss();
          this.presentToast("Login Successfully");
          this.navCtrl.setRoot(FirstPage);
        })
        .catch(error => {
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

  register() {
    this.navCtrl.push(RegisterPage);
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

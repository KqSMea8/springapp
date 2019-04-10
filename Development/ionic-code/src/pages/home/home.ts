import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { AdminPage } from '../admin/admin';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  gotoDashboard(){
    console.log("D");
    this.navCtrl.setRoot(DashboardPage);
  }
  gotoadminpage(){
    this.navCtrl.setRoot(AdminPage);
  }
  gotonotification(){
    this.navCtrl.push(NotificationPage);
  }

}

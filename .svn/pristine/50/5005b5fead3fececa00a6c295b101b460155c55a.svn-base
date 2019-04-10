import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddUserPage} from '../add-user/add-user';
import { ViewUserPage} from '../view-user/view-user';
import { ExistingUserPage } from '../existing-user/existing-user';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  addUser() {
   this.navCtrl.push(AddUserPage);
 }

 viewDashboard(){
   this.navCtrl.push(ViewUserPage);
 }
viewExistingUser(){
   this.navCtrl.push(ExistingUserPage);
 }
logout(){
  this.navCtrl.setRoot(HomePage);
}
notificationPage(){
  this.navCtrl.push(NotificationPage);
}
}

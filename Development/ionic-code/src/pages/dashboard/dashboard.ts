import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentsUploadPage } from '../documents-upload/documents-upload';
import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {
  // @Input('progress')  progress;
  current: number = 10;
  max: number = 100;
  stroke: number = 10;
  radius: number = 30;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  gotoUploadDocuments(){
    console.log("Dfs");
    this.navCtrl.push(DocumentsUploadPage);
  }
  gotohomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  gotohelpPage(){
    this.navCtrl.push(HelpPage);
  }
}

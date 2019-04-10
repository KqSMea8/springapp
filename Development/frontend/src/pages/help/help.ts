import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FeaturePage } from '../feature/feature';
import { SupportPage } from '../support/support';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  gotoAboutPage(){
    this.navCtrl.push(AboutPage);
  }
  gotoFeaturesPage(){
    this.navCtrl.push(FeaturePage);
  }
  gotoSupportPage(){
    this.navCtrl.push(SupportPage);
    
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewEducationalPage} from '../view-educational/view-educational';
import { ViewPersonalPage} from '../view-personal/view-personal'; 
import { ViewTechnicalPage} from '../view-technical/view-technical'; 
import { ViewProfessionalPage } from '../view-professional/view-professional';
/**
 * Generated class for the ViewDocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-documents',
  templateUrl: 'view-documents.html',
})
export class ViewDocumentsPage {
emp_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDocumentsPage');
    this.emp_id = this.navParams.data.empID;
    console.log(this.emp_id);
  }

  viewEdu(){
   this.navCtrl.push(ViewEducationalPage,{
     empID:this.emp_id
   });
 }
  

 viewTech(){
    this.navCtrl.push(ViewTechnicalPage,{
     empID:this.emp_id
   });
 }

viewPer(){
    this.navCtrl.push(ViewPersonalPage,{
     empID:this.emp_id
   });
 }
 
 viewProf(){
    this.navCtrl.push(ViewProfessionalPage,{
     empID:this.emp_id
   });
 }
}

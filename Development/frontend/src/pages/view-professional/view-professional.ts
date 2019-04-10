import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the ViewProfessionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-professional',
  templateUrl: 'view-professional.html',
})
export class ViewProfessionalPage {

  data: any;
  emp_id: any;
  profDocument: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfessionalPage');
  }

   ngOnInit() {
    console.log(this.navParams.data);
    this.emp_id = this.navParams.data.empID;
    console.log(this.emp_id);
    this._http.getRequest('http://localhost:8080/getprofdocument/get-prof-documents/' + this.emp_id).subscribe(data => {
      this.profDocument = data[0];
      console.log(this.profDocument);
    });
  }

}

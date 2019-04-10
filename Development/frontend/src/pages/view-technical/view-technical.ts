import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the ViewTechnicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-technical',
  templateUrl: 'view-technical.html',
})
export class ViewTechnicalPage {

  data: any;
  emp_id: any;
  techDocument: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTechnicalPage');
  }

   ngOnInit() {
    console.log(this.navParams.data);
    this.emp_id = this.navParams.data.empID;
    console.log(this.emp_id);
    this._http.getRequest('http://localhost:8080/gettechdocument/get-all-documents/' + this.emp_id).subscribe(data => {
      this.techDocument = data[0];
      console.log(this.techDocument);
    });
  }

}

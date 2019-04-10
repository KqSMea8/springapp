import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ViewDocumentsPage } from '../view-documents/view-documents';
/**
 * Generated class for the ViewDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-details',
  templateUrl: 'view-details.html',
})
export class ViewDetailsPage {
  employeeTable: any;
  emp_id: any;
  eduDocument: any;
  perDocument: any;
  techDocument: any;
  profDocument: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDetailsPage');
    this.getData();
  }
  private isOn: boolean = false;

  getButtonText(): string {
    return `Switch ${this.isOn ? 'Off' : 'On'}`;
  }
  setState(): void {
    this.isOn = !this.isOn;
  }

  toggleDetails() {
    this.isOn = !this.isOn;
  }

  ngOnInit() {

  }

  getData() {
    this.employeeTable = this.navParams.data["a"];
    console.log(this.employeeTable);
    this.emp_id = this.employeeTable["ie_emp_id"];
    console.log(this.emp_id);
  }

  viewDocs() {
    console.log(this.emp_id);
    this.navCtrl.push(ViewDocumentsPage, {
      empID: this.emp_id
    });

    this._http.getRequest('http://localhost:8080/getemployeeedudetails/get-edu-documents/' + this.emp_id).subscribe(data => {
      this.eduDocument = data[0];
      console.log(this.eduDocument);
    });


    this._http.getRequest('http://localhost:8080/getperdocument/get-per-documents/' + this.emp_id).subscribe(data => {
     this.perDocument = data[0];
      console.log(this.perDocument);
    });

    this._http.getRequest('http://localhost:8080/gettechdocument/get-all-documents/' + this.emp_id).subscribe(data => {
      this.techDocument = data[0];
      console.log(this.techDocument);
    });

    this._http.getRequest('http://localhost:8080/getprofdocument/get-prof-documents/' + this.emp_id).subscribe(data => {
      this.profDocument = data[0];
      console.log( this.profDocument);
    });
  }

}

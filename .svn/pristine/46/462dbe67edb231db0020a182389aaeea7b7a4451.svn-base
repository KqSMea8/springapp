import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import { HelpPage } from '../help/help';
import { HttpProvider } from '../../providers/http/http';
import { IntroductionPage } from '../introduction/introduction';
import { DocumentsUploadPage } from '../documents-upload/documents-upload';
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
  status: number;
  techTableStatus: any;
  current: number ;
  max: number = 100;
  stroke: number = 5;
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
  totalNoOfTechCert:number=5;
  username: string;
  initial: string;
  emp_id: 2345;
  name:string;
  password: any;
  person: string;
  jobTitle: any;
  employeecode: any;
  location: any;
  mail: any;
  supervisor: any;
  department: any;
  notechcert: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
  }
  ngOnInit() {
   
    
    this.username = sessionStorage.getItem("username");
    this.name = this.username.charAt(0).toUpperCase() + this.username.split('.')[0].slice(1, this.username.length) +". "+ this.username.split('.')[1].toUpperCase();
this.password=sessionStorage.getItem("password");
this.getUserDetails();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  
 gotohelpPage() {
    this.navCtrl.push(HelpPage);
  }
  gotoUploadDocuments() {
    console.log("Dfs");
    this.navCtrl.push(DocumentsUploadPage, {
      empID: this.employeecode
  });
}
  gotoIntroductionPage(){
    this.navCtrl.pop();
  }
gotohomePage(){
  this.navCtrl.push(HomePage);
}
  getUserDetails(){
    this._http.authenticate(this.username, this.password).subscribe(data => {
      console.log(this.username);
      console.log(this.password);
      console.log(data);
      this.person=data["person"];
      this.employeecode=this.person["employeeCode"];
      this.jobTitle=this.person["jobTitle"];
      this.location=this.person["location"];
      this.mail=this.person["mail"];
      this.supervisor=this.person["supervisor"];
      this.department=this.person["department"];
      console.log(this.department);
      this.getTechDocumentStatus();
    });
    
  }
  getTechDocumentStatus() {

console.log("sdf");

this.emp_id=2345;
this.current=0;
    this._http.getRequest('http://localhost:8080/getemployeedetails/get-document-status/'+ this.employeecode).subscribe(data => {
      console.log(data);
      console.log(this.employeecode);
      this.techTableStatus = data;
      console.log(this.techTableStatus);
this.notechcert=this.totalNoOfTechCert-this.techTableStatus;
      this.current=(this.notechcert/this.totalNoOfTechCert)* 100;
    });
  }
}

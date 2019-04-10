import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { IntroductionPage } from '../introduction/introduction';
import { ViewDetailsPage } from '../view-details/view-details';
import { HomePage } from '../home/home';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the ExistingUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-existing-user',
  templateUrl: 'existing-user.html',
})
export class ExistingUserPage implements OnInit {
   employeeTable: any;
   data: any;
   result: any = [];
   private username: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingUserPage');
  }
 
  setBackground() {
    if (status == 'Pending')
      return 'red';
    if (status == 'Validated')
      return 'green';
    if (status == 'Submitted')
      return 'blue';
    if (status == 'InProgress')
      return 'yellow';
  }

  viewDocs() {
    this.navCtrl.push(ViewDetailsPage);
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

  gotohomePage() {
    this.navCtrl.push(HomePage);
  }

  ngOnInit() {
    //this.location = sessionStorage.getItem("location");
    
    this._http.getRequest('http://localhost:8080/initateemp/get-users').subscribe(data => {
      console.log(data);
      this.result = data;
      this.employeeTable = data;
      console.log(this.employeeTable);
    });
  
  }

 open(value) {
    console.log(this.employeeTable[value]);
    this.navCtrl.push(ViewDetailsPage, {
      a : this.employeeTable[value]
    });
  } 

  getemp() {
    
   this.employeeTable = this.result.filter((emp) => {
      return emp['ie_emp_name'] != null && emp['ie_emp_name'].toString().toLowerCase().includes(this.username.toLowerCase());
    });
  }

reset()
{
  this.employeeTable = this.result(); 
}

}

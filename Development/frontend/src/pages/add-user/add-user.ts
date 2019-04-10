import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { EmployeeProvider } from '../../providers/employee/employee';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})

export class AddUserPage implements OnInit {
  addUserForm: FormGroup;

  endPoint:string = "http://localhost:8080/initateemp/add-user";

  constructor(public navCtrl: NavController, private _http: HttpProvider, public navParams: NavParams, private fb: FormBuilder) {
  }

  ngOnInit() {
  
    this.addUserForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      empid: ['', Validators.compose([Validators.required])],   
      emailid: ['', Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')])],
      interviewerRound1: ['',  Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      interviewerRound2: ['',  Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      doj: ['', Validators.compose([Validators.required])],
      pending: ['Pending']
    });
  }

 isReadonly() {
   return true;
  }

  onSubmit() {
    console.log(this.addUserForm.value);
    let a = {"ie_emp_id":this.addUserForm.value.empid,"ie_emp_name":this.addUserForm.value.name,"ie_emp_email":this.addUserForm.value.emailid,"ie_emp_doj":this.addUserForm.value.doj,"ie_int1":this.addUserForm.value.interviewerRound1,"ie_int2":this.addUserForm.value.interviewerRound2,"ie_status":"Pending"};
    this._http.postRequest(this.endPoint, a).subscribe(data => {
      console.log(data);
    });
    this.navCtrl.pop();
  }
}

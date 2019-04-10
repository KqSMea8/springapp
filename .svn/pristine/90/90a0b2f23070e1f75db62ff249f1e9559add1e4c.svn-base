import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AdminPage } from '../admin/admin';
import { NotificationPage } from '../notification/notification';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loginForm: FormGroup;
  status: any;
  department: String;
  person: any;

  constructor(public navCtrl: NavController, private _http: HttpProvider, private fb: FormBuilder, public navParams: NavParams) {

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]

    });
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this._http.authenticate(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
      console.log(data);
      this.status = data["status"];
      // this.person=data["person"];
      // this.department=this.person["department"];
      // console.log(this.department);
      if (this.status == 200) {
        sessionStorage.setItem('username', this.loginForm.value.username);
        sessionStorage.setItem('password', this.loginForm.value.password);
        this.navCtrl.setRoot(IntroductionPage);
      }

      else if (this.loginForm.value.username == "hradmin" && this.loginForm.value.password == "admin@123") {
        this.navCtrl.setRoot(AdminPage);
      }

      else
        alert("Incorrect Credentials");
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewDocumentsPage } from '../view-documents/view-documents';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-view-user',
  templateUrl: 'view-user.html',
})
export class ViewUserPage implements OnInit {
  employeeTable: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewUserPage');
  }

  ngOnInit() {
    this.showfileds();
  }

  viewdocs() {
    this.navCtrl.push(ViewDocumentsPage);
  }
  showfileds() {
    this._http.getRequest('http://localhost:8080/initateemp/get-users').subscribe(data => {
      console.log(data);
      this.employeeTable = data;
    });

  }
}

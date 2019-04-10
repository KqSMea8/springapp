import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {
  file: File;
  i: number = 0;
  f: any[] = [];
  employeeCode: any;
  changeListener($event): void {
    this.file = $event.target.files[0];

    this.i++;
    this.f[this.i] = this.file;

    if ((this.f[this.i].size >= 10000) && (this.f[this.i].size <= 1024000)) {
      console.log(this.f[this.i].size);
    }
    else {
      alert('Upload files between 10Kb - 1Mb');
      this.i--;
    }


  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraduationCertificatesPage');
    this.employeeCode = this.navParams.data.empID;
    console.log(this.employeeCode);
  }
  uploadImage() {



    var form = new FormData();
    form.append('ep_per_emp_id', this.employeeCode)

    form.append('aadhar', this.f[1], 'this.f[1].name');
    form.append('passport', this.f[2], 'this.f[2].name');
    form.append('pancard', this.f[3], 'this.f[3].name');
    form.append('addressproof', this.f[4], 'this.f[4].name');
    console.log(form);

    this._http.postRequest('http://localhost:8080/getper/upload-personal-document', form).subscribe(data => {
      console.log(data);
    });


  }


}

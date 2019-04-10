import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

/*
 * Generated class for the GraduationCertificatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graduation-certificates',
  templateUrl: 'graduation-certificates.html',
})
export class GraduationCertificatesPage {

  file: File;
  f: any[] = [];
  i: number = 0;
  employeeCode: any;
<<<<<<< .mine
  recordExist: any;
  comments: string | Blob;
  API_ENPOINT = 'http://localhost:8080'
  // ngOnInit(){ 
||||||| .r411
  // ngOnInit(){ 
=======


>>>>>>> .r437
  //   var headers = new HttpHeaders();
  //   headers.append('Accept', 'multipart/form-data');
  //   headers.append('Content-Type','multipart/form-data');
  //   let options = new RequestOptionsArgs({ headers: headers });

  //  }

  changeListener($event): void {
    this.file = $event.target.files[0];

    this.i++;
    this.f[this.i] = this.file;
    if ((this.f[this.i].size >= 10000) && (this.f[this.i].size <= 1024000)) {
    }
    else {
      alert('Upload files between 10Kb - 1Mb');
    }

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraduationCertificatesPage');
    this.employeeCode = 2890;
    console.log(this.employeeCode);

  }
  uploadProfileImage() {
    this.i++;
    if ((this.f[this.i].size >= 10000) && (this.f[this.i].size <= 1024000)) {

      // console.log(b);
      let recordExist;


      this._http.getRequest(this.API_ENPOINT + '/uploadtechdocuments/record-exists?et_emp_id=' + this.employeeCode).subscribe(data => {
        recordExist = data;
        console.log(recordExist);
        console.log(recordExist.statusCode);
        if (recordExist.statusCode == 400 || recordExist.propadEmpTechDetails == null) {
          var form = new FormData();

          form.append('et_emp_id', this.employeeCode)

          form.append('file', this.f[1], 'this.f[1].name');
          form.append('file1', this.f[2], 'this.f[2].name');
          form.append('file2', this.f[3], 'this.f[3].name');
          form.append('file3', this.f[4], 'this.f[4].name');
          form.append('file4', this.f[5], 'this.f[5].name');
          console.log(form);
          this._http.postRequest(this.API_ENPOINT + '/uploadtechdocuments/upload-tech-document', form).subscribe(data => {
            console.log(data);
            console.log("added successfully");
          });
        }
        if (recordExist.statusCode == 200 && recordExist.propadEmpTechDetails != null) {
          console.log(recordExist["propadEmpTechDetails"]["et_id"]);
          form.append('et_id', recordExist["propadEmpTechDetails"]["et_id"])
          form.append('et_emp_id', this.employeeCode)

          form.append('file', this.f[1], 'this.f[1].name');
          form.append('file1', this.f[2], 'this.f[2].name');
          form.append('file2', this.f[3], 'this.f[3].name');
          form.append('file3', this.f[4], 'this.f[4].name');
          form.append('file4', this.f[5], 'this.f[5].name');
          form.append('comments', this.comments);
          console.log(form);
          // save = { "id": recordExist["rtSavedJobDetails"]["id"], "sjSaveFlag": a.saved, "sjEmployeeCode": this.sscode, "positionCode": a["jdPositionCode"] };

          this._http.postRequest(this.API_ENPOINT + '/uploadtechdocuments/upload-tech-document', form).subscribe(data => {
            console.log(data);
            console.log("added successfully");
          });
        }
      });


    }
      else {
      alert('Upload files between 10Kb - 1Mb');
    }

  }

}


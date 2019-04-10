import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { HomePage } from '../home/home';
import { SchoolCertificatesPage } from '../school-certificates/school-certificates';
import { GraduationCertificatesPage } from '../graduation-certificates/graduation-certificates';
import { WorkExperiencePage } from '../work-experience/work-experience';
import { PersonalDetailsPage } from '../personal-details/personal-details';

/**
 * Generated class for the DocumentsUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents-upload',
  templateUrl: 'documents-upload.html',
})
export class DocumentsUploadPage implements OnInit {

  certificates: string[] = [];
  progress: number = 0;
  file: File;
  employeeCode: any;
  constructor(public navCtrl: NavController, private _http: HttpProvider, public navParams: NavParams) {
  }

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.certificates.push("Certificate " + (i + 1));
    }
  }

  // changeListener($event): void {
  //   this.file = $event.target.files[0];
  //   this.uploadProfileImage();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentsUploadPage');
    this.employeeCode = this.navParams.data.empID;
    console.log(this.employeeCode);
  }
  gotodashboard() {

    this.navCtrl.pop();
  }
  // uploadProfileImage() {
  //   let a = {"et_emp_cert1": this.file};
  //   console.log(a);
  //   this._http.fileupload(this.file)

  // }
  gotohomePage() {
    this.navCtrl.setRoot(HomePage);
    // sessionStorage.clear();
  }
   
   a(){
     this.navCtrl.push(SchoolCertificatesPage, {
    
        empID: this.employeeCode 
     });
   }
    b(){
     this.navCtrl.push(GraduationCertificatesPage, {
    
      empID: this.employeeCode 
   });
   }
    c(){
     this.navCtrl.push( PersonalDetailsPage,
      {
    
        empID: this.employeeCode 
     }); 
   }
    d(){
     this.navCtrl.push(WorkExperiencePage,  {
    
      empID: this.employeeCode 
   });
   }
    

}

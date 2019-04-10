import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    for(let  i = 0; i < 10; i++) {
      this.certificates.push("Certificate " + (i + 1));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentsUploadPage');
  }
  gotodashboard(){
    
    this.navCtrl.pop();
  }
  

}

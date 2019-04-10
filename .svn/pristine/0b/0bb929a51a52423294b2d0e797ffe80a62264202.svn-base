import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the ViewEducationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-educational',
  templateUrl: 'view-educational.html',
})
export class ViewEducationalPage {
  data: any;
  emp_id: any;
  eduDocument: any;
  validate: string;
  validate_holder: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewEducationalPage');

  }
  ngOnInit() {

    console.log(this.navParams.data);
    this.emp_id = this.navParams.data.empID;
    console.log(this.emp_id);
    this._http.getRequest('http://localhost:8080/getemployeeedudetails/get-edu-documents/' + this.emp_id).subscribe(data => {
      this.eduDocument = data[0];
      console.log(this.eduDocument);
    });
    this.validate_holder = "Validate"
  }
  
  btnActivate(ionicButton) {
  
    // if(this.validate_holder == "Validate"){
    // this.validate_holder= "Validated"
    ionicButton.color = 'secondary';
   //  }
}
}
  

 




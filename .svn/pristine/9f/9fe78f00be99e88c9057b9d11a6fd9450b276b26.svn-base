webpackJsonp([25],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_user_add_user__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__existing_user_existing_user__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_details_view_details__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = (function () {
    function AdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isOn = false;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.addUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_user_add_user__["a" /* AddUserPage */]);
    };
    //  viewDashboard(){
    //    this.navCtrl.push(ViewUserPage);
    //  }
    AdminPage.prototype.viewExistingUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__existing_user_existing_user__["a" /* ExistingUserPage */]);
    };
    AdminPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    // notificationPage(){
    //   this.navCtrl.push(NotificationPage);
    // }
    AdminPage.prototype.viewDocs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_details_view_details__["a" /* ViewDetailsPage */]);
    };
    AdminPage.prototype.getButtonText = function () {
        return "Switch " + (this.isOn ? 'Off' : 'On');
    };
    AdminPage.prototype.setState = function () {
        this.isOn = !this.isOn;
    };
    AdminPage.prototype.toggleDetails = function () {
        this.isOn = !this.isOn;
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\admin\admin.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle icon-only class="menuButton" (click)="Menu"> \n    <ion-icon name="menu"></ion-icon>\n  </button>\n    <ion-title center>Admin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  Welcome HR,\n\n  <ion-nav #mycontent [root]="AdminPage"></ion-nav>\n  <ion-menu [content]="mycontent">\n    <ion-content>\n      <ion-label>\n\n        <div id="accordion">\n          <div class="item">\n            Employee Onboarding\n            <div padding>\n              <ion-list (click)="addUser()">\n                Initiate Employee Onboarding\n              </ion-list>\n            </div>\n          </div>\n        </div>\n\n        <div id="accordion">\n          <div class="item">\n              Dashboard\n             <div padding>\n            <ion-list (click)="viewExistingUser()">\n              View Onboarding Details\n            </ion-list>\n          </div>\n          </div>\n        </div>\n             <div class="left">\n            <ion-list (click)="logout()">\n              Logout\n            </ion-list>\n             </div>\n      </ion-label>\n    </ion-content>\n  </ion-menu>\n  <page-existing-user >  </page-existing-user>\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_employee_employee__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddUserPage = (function () {
    function AddUserPage(navCtrl, _http, navParams, fb, empService) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this.navParams = navParams;
        this.fb = fb;
        this.empService = empService;
        this.endPoint = "http://localhost:8080/initateemp/add-user";
    }
    AddUserPage.prototype.ngOnInit = function () {
        this.addUserForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            empid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            emailid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')])],
            interviewerRound1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            interviewerRound2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            doj: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pending: ['Pending']
        });
    };
    AddUserPage.prototype.isReadonly = function () {
        return true;
    };
    AddUserPage.prototype.onSubmit = function () {
        console.log(this.addUserForm.value);
        var a = { "ie_emp_id": this.addUserForm.value.empid, "ie_emp_name": this.addUserForm.value.name, "ie_emp_email": this.addUserForm.value.emailid, "ie_emp_doj": this.addUserForm.value.doj, "ie_int1": this.addUserForm.value.interviewerRound1, "ie_int2": this.addUserForm.value.interviewerRound2, "ie_status": "Pending" };
        this._http.postRequest(this.endPoint, a).subscribe(function (data) {
            console.log(data);
        });
        this.navCtrl.pop();
    };
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-user',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\add-user\add-user.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Initiate Employee Onboarding</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> \n \n    <form [formGroup]="addUserForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Employee Name</ion-label>\n                <ion-input type="text" formControlName="name"  [ngClass]="{\'error-border\':!addUserForm.controls[\'name\'].valid}"></ion-input>\n            </ion-item>\n\n            <div class="error-display">\n                <span class="error-box" *ngIf="addUserForm.controls[\'name\'].hasError(\'required\') && addUserForm.controls[\'name\'].touched">* Name is required!</span>\n                <span class="error-box" *ngIf="addUserForm.controls[\'name\'].hasError(\'pattern\')">* Enter valid name!</span>\n            </div>\n\n            <ion-item>\n                <ion-label floating>Employee ID</ion-label>\n                <ion-input type="text" formControlName="empid" value="" [ngClass]="{\'error-border\':!addUserForm.controls[\'empid\'].valid}"></ion-input>\n            </ion-item>\n\n            <div class="error-display">\n                <span class="error-box" *ngIf="addUserForm.controls[\'empid\'].hasError(\'required\') && addUserForm.controls[\'empid\'].touched"> * EmpId is required!</span>\n            </div>\n\n            <ion-item>\n                <ion-label floating>Email ID</ion-label>\n                <ion-input type="email" formControlName="emailid" value=""></ion-input>\n            </ion-item>\n\n            <div class="error-display">\n                <span class="error-box" *ngIf="addUserForm.controls[\'emailid\'].hasError(\'required\') && addUserForm.controls[\'emailid\'].touched"> * Email id is required!</span>\n                <span class="error-box" *ngIf="addUserForm.controls[\'emailid\'].hasError(\'pattern\')">* Enter valid Email Id!</span>\n            </div>\n\n            <ion-item>\n                <ion-label floating>1st Level Interviewer</ion-label>\n                <ion-input type="text" formControlName="interviewerRound1" value=""></ion-input>\n            </ion-item>\n\n            <div class="error-display">\n                <span class="error-box" *ngIf="addUserForm.controls[\'interviewerRound1\'].hasError(\'required\') && addUserForm.controls[\'interviewerRound1\'].touched"> * Interviewer for Round 1 is required!</span>\n                <span class="error-box" *ngIf="addUserForm.controls[\'interviewerRound1\'].hasError(\'pattern\')">* Enter valid Interviewer name!</span>\n            </div>\n\n            <ion-item>\n                <ion-label floating>2nd Level Interviewer</ion-label>\n                <ion-input type="text" formControlName="interviewerRound2" value=""></ion-input>\n            </ion-item>\n\n            <div class="error-display">\n                <span class="error-box" *ngIf="addUserForm.controls[\'interviewerRound2\'].hasError(\'required\') && addUserForm.controls[\'interviewerRound2\'].touched"> * Interviewer for Round 2 is required!</span>\n                <span class="error-box" *ngIf="addUserForm.controls[\'interviewerRound2\'].hasError(\'pattern\')">* Enter valid Interviewer name!</span>\n            </div>\n\n            <ion-item>\n                <ion-label floating>DOJ</ion-label>\n                <ion-datetime display-format="MMM DD, YYYY HH:mm" formControlName="doj"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Status</ion-label>\n                <ion-input type="text" formControlName="pending" [readonly]="isReadonly">\n                </ion-input>\n            </ion-item>\n\n           <!--<div padding>-->\n                <button ion-button primary block  (click)="onSubmit()">Submit</button>\n            <!--</div>-->\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\add-user\add-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_employee_employee__["a" /* EmployeeProvider */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=add-user.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_details_view_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { IntroductionPage } from '../introduction/introduction';



/**
 * Generated class for the ExistingUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExistingUserPage = (function () {
    // emp: any;
    function ExistingUserPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.isOn = false;
    }
    ExistingUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExistingUserPage');
    };
    ExistingUserPage.prototype.setBackground = function () {
        if (status == 'Pending')
            return 'red';
        if (status == 'Validated')
            return 'green';
        if (status == 'Submitted')
            return 'blue';
        if (status == 'InProgress')
            return 'yellow';
    };
    // gotoIntroductionPage(){
    //   this.navCtrl.push(IntroductionPage);
    // }
    // gotoIntroductionPage() {
    //   this.navCtrl.push(IntroductionPage);
    // }
    ExistingUserPage.prototype.viewDocs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_details_view_details__["a" /* ViewDetailsPage */]);
    };
    ExistingUserPage.prototype.getButtonText = function () {
        return "Switch " + (this.isOn ? 'Off' : 'On');
    };
    ExistingUserPage.prototype.setState = function () {
        this.isOn = !this.isOn;
    };
    ExistingUserPage.prototype.toggleDetails = function () {
        this.isOn = !this.isOn;
    };
    ExistingUserPage.prototype.gotohomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ExistingUserPage.prototype.ngOnInit = function () {
        //this.location = sessionStorage.getItem("location");
        this.showfileds();
    };
    ExistingUserPage.prototype.showfileds = function () {
        var _this = this;
        this._http.getRequest('http://localhost:8080/initateemp/get-users').subscribe(function (data) {
            //console.log(data);
            _this.employeeTable = data;
        });
    };
    ExistingUserPage.prototype.open = function (value) {
        console.log(this.employeeTable[value]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_details_view_details__["a" /* ViewDetailsPage */], {
            a: this.employeeTable[value]
        });
    };
    ExistingUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-existing-user',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\existing-user\existing-user.html"*/'<!--\n  Generated template for the ExistingUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="!isOn" center>List of Employees</ion-title>\n      <ion-searchbar *ngIf="isOn" (ionInput)="getemp()" (ionCancel)="reset()"  [(ngModel)]="username" ></ion-searchbar>\n    <ion-buttons end>\n      <button class="searchbutton" (click)="toggleDetails()"><ion-icon name="search" class="search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <div *ngFor="let emp of employeeTable; let i=index" (click)="open(i)">\n    <ion-row class="employeeContainer">\n      <div class="colm imageContainer">\n        <ion-icon name="person"></ion-icon>\n       \n        <span [style.background-color]="setBackground(emp.ie_emp_status)" class="dot">\n        </span>\n      </div>\n      <div class="row1">\n        <div class="name colm">\n          {{emp.ie_emp_name}} (ID: {{emp.ie_emp_id}})\n        </div>\n      </div>\n\n      <div class="row2">\n        {{emp.ie_emp_email}}\n          <!--<ion-icon name="arrow-dropright" class="right-arrow" ></ion-icon>-->\n        </div>\n      \n    </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n\n\n\n<!--<ion-footer>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-icon (click)="gotoIntroductionPage()" name="home"></ion-icon>\n        </ion-col>\n        <ion-col id="uploadicon">\n          <ion-icon (click)="gotoUploadDocuments()" name="cloud-upload"></ion-icon>\n        </ion-col>\n        <ion-col id="center" >\n          <ion-icon (click)="gotohelpPage()" name="person"></ion-icon>\n\n        </ion-col>\n        <ion-col id="center" class="btn-right">\n          <ion-icon (click)="gotohomePage()" name="log-out"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n</ion-footer>-->\n\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\existing-user\existing-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], ExistingUserPage);
    return ExistingUserPage;
}());

//# sourceMappingURL=existing-user.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEducationalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewEducationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewEducationalPage = (function () {
    function ViewEducationalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.certificates = [];
    }
    ViewEducationalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewEducationalPage');
    };
    ViewEducationalPage.prototype.ngOnInit = function () {
        for (var i = 0; i < 4; i++) {
            this.certificates.push("Certificate " + (i + 1));
        }
    };
    ViewEducationalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-educational',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\view-educational\view-educational.html"*/'<!--\n  Generated template for the ViewEducationalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Educational Documents</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content *ngIf="eduDocument" padding>\n\n  <ion-row>\n\n    <ion-grid>\n      <div class="name colm">\n        Employee ID : {{eduDocument.ed_emp_id}}\n      </div>\n    </ion-grid>\n\n      <ion-grid>\n\n        <div class="name colm">\n          SSLC Marksheet\n        </div>\n        <div>\n          <img src="data:image/png;base64,{{eduDocument.ed_edu_sslc}}"  alt="">\n        </div>\n      </ion-grid>\n\n      <ion-grid>\n\n        <div class="row2">\n          HSC Marksheet</div>\n        <div>\n          <img src="data:image/png;base64,{{eduDocument.ed_edu_hsc}}"  alt="">\n        </div>\n\n      </ion-grid>\n\n      <ion-grid>\n\n        <div class="row2">\n          Diploma Certificate </div>\n        <div>\n          <img src="data:image/png;base64,{{eduDocument.ed_edu_dip}}"  alt="">\n        </div>\n\n      </ion-grid>\n\n      <ion-grid>\n\n        <div class="row2">\n          UG Certificate </div>\n        <div>\n          <img src="data:image/png;base64,{{eduDocument.ed_edu_ug}}"  alt="">\n        </div>\n\n      </ion-grid>\n\n      <ion-grid>\n\n        <div class="row2">\n          PG Certificate </div>\n        <div>\n          <img src="data:image/png;base64,{{eduDocument.ed_edu_pg}}"  alt="">\n        </div>\n\n      </ion-grid>\n\n      <ion-grid>\n\n        <div class="row2">\n          Others </div>\n        <div>\n          <img src="data:image/png;base64,{{eduDocument.ed_edu_others}}"  alt="">\n        </div>\n\n      </ion-grid>\n\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\view-educational\view-educational.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewEducationalPage);
    return ViewEducationalPage;
}());

//# sourceMappingURL=view-educational.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroductionPage = (function () {
    function IntroductionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slideOpts = {
            effect: 'flip'
        };
    }
    IntroductionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroductionPage');
    };
    IntroductionPage.prototype.gotoDashboardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    IntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-introduction',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\introduction\introduction.html"*/'<!--\n  Generated template for the Home1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides pager="true">\n    <ion-slide>\n      <ion-grid>\n   <div>\n    <img src="../../assets/imgs/Puzzles connect.png">\n   </div>\n    <div>\n    <ion-row>\n      <ion-col text-center>\n         Prodapt is a land of abundant opportunities where Innovation and Ideation is the key\n      </ion-col>\n    </ion-row>\n    </div>\n </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n   <div>\n    <img src="../assets/imgs/we are prodaptions.png">\n   </div>\n    <div>\n    <ion-row>\n      <ion-col text-center>\n         Global leader in providing Software, Engineering and Operational services to Digital Service Providers. Prodapt is a fun-filled place to work\n      </ion-col>\n    </ion-row>\n    </div>\n </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n   <div>\n    <img src="../assets/imgs/posh.png">\n   </div>\n    <div>\n    <ion-row>\n      <ion-col text-center>\n         POSH (Prevention of Sexual Harassment) is a legislative act that recognises the human rights of protection against sexual harassment\n      </ion-col>\n    </ion-row>\n    </div>\n </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button color="primary" (click)="gotoDashboardPage()" block class="custom-button">Continue</button>\n</ion-footer>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\introduction\introduction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroductionPage);
    return IntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documents_upload_documents_upload__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.max = 100;
        this.stroke = 10;
        this.radius = 30;
        this.semicircle = false;
        this.rounded = false;
        this.responsive = false;
        this.clockwise = true;
        this.color = '#45ccce';
        this.background = '#eaeaea';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 0;
        this.animations = [];
        this.gradient = false;
        this.realCurrent = 0;
        this.totalNoOfTechCert = 5;
    }
    DashboardPage.prototype.ngOnInit = function () {
        this.username = sessionStorage.getItem("username");
        this.name = this.username.charAt(0).toUpperCase() + this.username.split('.')[0].slice(1, this.username.length) + ". " + this.username.split('.')[1].toUpperCase();
        this.password = sessionStorage.getItem("password");
        this.getUserDetails();
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.gotohelpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    DashboardPage.prototype.gotoUploadDocuments = function () {
        console.log("Dfs");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__documents_upload_documents_upload__["a" /* DocumentsUploadPage */]);
    };
    DashboardPage.prototype.gotoIntroductionPage = function () {
        this.navCtrl.pop();
    };
    DashboardPage.prototype.gotohomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    DashboardPage.prototype.getUserDetails = function () {
        var _this = this;
        this._http.authenticate(this.username, this.password).subscribe(function (data) {
            console.log(_this.username);
            console.log(_this.password);
            console.log(data);
            _this.person = data["person"];
            _this.employeecode = _this.person["employeeCode"];
            _this.jobTitle = _this.person["jobTitle"];
            _this.location = _this.person["location"];
            _this.mail = _this.person["mail"];
            _this.supervisor = _this.person["supervisor"];
            _this.department = _this.person["department"];
            console.log(_this.department);
            _this.getTechDocumentStatus();
        });
    };
    DashboardPage.prototype.getTechDocumentStatus = function () {
        var _this = this;
        console.log("sdf");
        this.emp_id = 2345;
        this.current = 0;
        this._http.getRequest('http://localhost:8080/getemployeedetails/get-document-status/' + this.employeecode).subscribe(function (data) {
            console.log(data);
            console.log(_this.employeecode);
            _this.techTableStatus = data;
            console.log(_this.techTableStatus);
            _this.notechcert = _this.totalNoOfTechCert - _this.techTableStatus;
            _this.current = (_this.notechcert / _this.totalNoOfTechCert) * 100;
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-row>\n      <ion-col>\n        <ion-title>Profile</ion-title>\n      </ion-col>\n\n\n      <ion-col>\n        <ion-icon class="btn-right log-out" (click)="gotohomePage()" name="log-out"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n\n        <ion-col>\n          <ion-grid>\n            <ion-row>{{name}}</ion-row>\n          </ion-grid>\n          <ion-grid>\n            <ion-row>{{mail}}</ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col>\n          <div class="btn-right">\n            <div class="positionRelative">\n              <round-progress [current]="current" [max]="max" [stroke]="stroke" [radius]="radius" [semicircle]="semicircle" [rounded]="rounded"\n                [responsive]="responsive" [clockwise]="clockwise" [color]="gradient ? \'url(#gradient)\' : color" [background]="background"\n                [duration]="duration" [animation]="animation" [animationDelay]="animationDelay">\n              </round-progress>\n              <div class="percentageValue">\n                {{current}} %\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>Job Title </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{jobTitle}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>Department </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{department}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>Location </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{location}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>Supervisor </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{supervisor}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n       \n        <ion-col id="uploadicon">\n\n          <ion-icon (click)="gotoUploadDocuments()" name="cloud-upload"></ion-icon>\n        </ion-col>\n        <ion-col id="center" class="btn-right">\n          <ion-icon (click)="gotohelpPage()" name="help-circle"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_feature__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__support_support__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.gotoAboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    HelpPage.prototype.gotoFeaturesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feature_feature__["a" /* FeaturePage */]);
    };
    HelpPage.prototype.gotoSupportPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__support_support__["a" /* SupportPage */]);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label (click)="gotoAboutPage()">About</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label (click)="gotoFeaturesPage()">Features</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label (click)="gotoSupportPage()">Support</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label (click)="gotoSupportPage()">Feedback</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>Why Onboarding ?</h1>\n<h6>\nOnboarding is the process of integrating new employees into an organization. It’s important to note the difference between onboarding and orientation. Orientation is an event, typically lasting one day, that usually begins the onboarding process. But onboarding continues for months to even years after an employee is hired.\n</h6>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeaturePage = (function () {
    function FeaturePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeaturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeaturePage');
    };
    FeaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feature',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\feature\feature.html"*/'<!--\n  Generated template for the FeaturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Feature</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>Features of Propad</h1>\n<ion-list no line>\n  <ion-item>\n    <ion-label>Ability to upload Documents</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Makes Onboarding Process Simpler</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Ability to show document status</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Ability to retrieve the documents</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Intermediate process of saving</ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\feature\feature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FeaturePage);
    return FeaturePage;
}());

//# sourceMappingURL=feature.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = (function () {
    function SupportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title >Support</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2 >write to us...</h2>\n  <ion-card> <ion-textarea  cols="40" rows="10"></ion-textarea></ion-card>\n <button class="btn-right" ion-button color="primary" >send</button>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_certificates_school_certificates__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graduation_certificates_graduation_certificates__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_experience_work_experience__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personal_details_personal_details__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DocumentsUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentsUploadPage = (function () {
    function DocumentsUploadPage(navCtrl, _http, navParams) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this.navParams = navParams;
        this.certificates = [];
        this.progress = 0;
    }
    DocumentsUploadPage.prototype.ngOnInit = function () {
        for (var i = 0; i < 4; i++) {
            this.certificates.push("Certificate " + (i + 1));
        }
    };
    // changeListener($event): void {
    //   this.file = $event.target.files[0];
    //   this.uploadProfileImage();
    // }
    DocumentsUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentsUploadPage');
    };
    DocumentsUploadPage.prototype.gotodashboard = function () {
        this.navCtrl.pop();
    };
    // uploadProfileImage() {
    //   let a = {"et_emp_cert1": this.file};
    //   console.log(a);
    //   this._http.fileupload(this.file)
    // }
    DocumentsUploadPage.prototype.gotohomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        // sessionStorage.clear();
    };
    DocumentsUploadPage.prototype.a = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__school_certificates_school_certificates__["a" /* SchoolCertificatesPage */]);
    };
    DocumentsUploadPage.prototype.b = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__graduation_certificates_graduation_certificates__["a" /* GraduationCertificatesPage */]);
    };
    DocumentsUploadPage.prototype.c = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    DocumentsUploadPage.prototype.d = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__work_experience_work_experience__["a" /* WorkExperiencePage */]);
    };
    DocumentsUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-documents-upload',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\documents-upload\documents-upload.html"*/'<!--\n  Generated template for the DocumentsUploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>documents-upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-col class="progress-outer">\n        <ion-col class="progress-inner"  [style.width]="progress + \'%\'">\n            {{progress}}%\n        </ion-col>\n    </ion-col>\n<form method="POST"  enctype="multipart/form-data" action="/uploadFiles">\n  <ion-list no-lines>\n    <ion-item *ngFor="let c of certificates">\n      <ion-label>{{ c }}</ion-label>\n      <ion-input type="file" accept="image/*" (change)="changeListener($event)" >\n      </ion-input> \n    </ion-item>\n  </ion-list>\n  </form>\n\n  <button ion-button block item-end color="primary" (click)="gotodashboard()">Submit</button>\n</ion-content>-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Certificates\n    </ion-title>\n      <!--<ion-col>\n        <ion-icon class="btn-right log-out" (click)="gotohomePage()" name="log-out"></ion-icon>\n      </ion-col>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<ion-row>\n    <ion-col class="progress-outer">\n      <ion-col class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n      </ion-col>\n    </ion-col>\n  </ion-row>-->\n  <div class="Adjust">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="a()">\n            <img src="../assets/imgs/Graduate icon.png">\n            <h6>Educational Certificates</h6>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="b()">\n            <img src="../assets/imgs/importent.png">\n            <h6>Technical Certificates</h6>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="c()">\n            <img src="../assets/imgs/Personal icon.png">\n            <h6>Personal Documents</h6>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="d()">\n            <img src="../assets/imgs/experience.png">\n            <h6>Professional Documents </h6>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\documents-upload\documents-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DocumentsUploadPage);
    return DocumentsUploadPage;
}());

//# sourceMappingURL=documents-upload.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolCertificatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SchoolCertificatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchoolCertificatesPage = (function () {
    function SchoolCertificatesPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
    }
    SchoolCertificatesPage.prototype.ngOnInit = function () { this.getdocuments(); };
    SchoolCertificatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchoolCertificatesPage');
    };
    SchoolCertificatesPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        this.uploaddocument();
    };
    SchoolCertificatesPage.prototype.uploaddocument = function () {
        if ((this.file.size >= 10000) && (this.file.size <= 1024000)) {
            console.log(this.file);
        }
        else {
            alert('Upload files between 10Kb - 1Mb');
        }
    };
    SchoolCertificatesPage.prototype.getdocuments = function () {
        var _this = this;
        this.employeeCode = 3456;
        console.log("in my function");
        this._http.getRequest('http://localhost:8080/gettechdocument/get-all-documents/' + this.employeeCode).subscribe(function (data) {
            console.log(data);
            _this.byteArray = data[0]["et_tech_cert1"];
            console.log(_this.byteArray);
        });
    };
    SchoolCertificatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-certificates',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\school-certificates\school-certificates.html"*/'<!--\n  Generated template for the SchoolCertificatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Educational Certificates</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>SSLC</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n      \n         \n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>HSC</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Diploma</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>UG</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>PG</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Comments</h6>\n            <ion-item>\n              <ion-textarea placeholder="Enter your comments..."></ion-textarea>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    &nbsp;\n    <button ion-button primary block>\n      Upload\n    </button>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\school-certificates\school-certificates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], SchoolCertificatesPage);
    return SchoolCertificatesPage;
}());

//# sourceMappingURL=school-certificates.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraduationCertificatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GraduationCertificatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraduationCertificatesPage = (function () {
    function GraduationCertificatesPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.f = [];
        this.i = 0;
    }
    // ngOnInit(){ 
    //   var headers = new HttpHeaders();
    //   headers.append('Accept', 'multipart/form-data');
    //   headers.append('Content-Type','multipart/form-data');
    //   let options = new RequestOptionsArgs({ headers: headers });
    //  }
    GraduationCertificatesPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        this.i++;
        this.f[this.i] = this.file;
        console.log(this.i);
    };
    GraduationCertificatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraduationCertificatesPage');
        this.employeeCode = this.navParams.data.empID;
        console.log(this.employeeCode);
    };
    GraduationCertificatesPage.prototype.uploadProfileImage = function () {
        if ((this.file.size >= 10000) && (this.file.size <= 1024000)) {
            // let b = { "file": this.f[1], "file1": this.f[2], "file2": this.f[3], "file3": this.f[4], "file4": this.f[5] };
            // console.log(b);
            var form = new FormData();
            form.append('et_emp_id', this.employeeCode);
            form.append('file', this.f[1], 'this.f[1].name');
            form.append('file1', this.f[2], 'this.f[2].name');
            form.append('file2', this.f[3], 'this.f[3].name');
            form.append('file3', this.f[4], 'this.f[4].name');
            form.append('file4', this.f[5], 'this.f[5].name');
            console.log(form);
            this._http.postRequest('http://localhost:8080/uploadtechdocuments/upload-tech-document', form).subscribe(function (data) {
                console.log(data);
            });
        }
        else {
            alert('Upload files between 10Kb - 1Mb');
        }
    };
    GraduationCertificatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-graduation-certificates',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\graduation-certificates\graduation-certificates.html"*/'<!--\n  Generated template for the GraduationCertificatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Technical Certificates</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Technical Certificate 1</h6>\n             <ion-item >\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n             </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary" (click)="techUpload()">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Technical Certificate 2</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n\n              <button ion-button color="primary" (click)="techUpload()">Save</button>\n\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Technical Certificate 3</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n\n              <button ion-button color="primary" (click)="techUpload()">Save</button>\n\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Technical Certificate 4</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary" (click)="techUpload()">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Technical Certificate 5</h6>\n            \n              <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n              </ion-item>\n            <ion-buttons end>\n\n              <button ion-button color="primary" (click)="techUpload()">Save</button>\n\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Comments</h6>\n            <ion-item>\n              <ion-textarea placeholder="Enter your comments..."></ion-textarea>\n            </ion-item>\n            <ion-buttons end>\n\n              <button ion-button color="primary" (click)="techUpload()">Save</button>\n\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    &nbsp;\n\n    <button ion-button primary block (click)="uploadProfileImage()">\n\n      Upload\n    </button>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\graduation-certificates\graduation-certificates.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]) === "function" && _c || Object])
    ], GraduationCertificatesPage);
    return GraduationCertificatesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=graduation-certificates.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WorkExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkExperiencePage = (function () {
    function WorkExperiencePage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
    }
    WorkExperiencePage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        this.uploadProfileImage();
    };
    WorkExperiencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkExperiencePage');
    };
    WorkExperiencePage.prototype.uploadProfileImage = function () {
        if ((this.file.size >= 10000) && (this.file.size <= 1024000)) {
            console.log(this.file);
            // this._http.fileupload(this.file);
        }
        else {
            alert('Upload files between 10Kb - 1Mb');
        }
    };
    WorkExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-work-experience',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\work-experience\work-experience.html"*/'<!--\n  Generated template for the WorkExperiencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="primary">\n    <ion-title>Professional Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Experience Certificate 1</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Experience Certificate 2</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Experience Certificate 3</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Payslip 1</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Payslip 2</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Payslip 3</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Comments</h6>\n            <ion-item>\n              <ion-textarea placeholder="Enter your comments..."></ion-textarea>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    &nbsp;\n    <button ion-button primary block>\n      Upload\n    </button>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\work-experience\work-experience.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]) === "function" && _c || Object])
    ], WorkExperiencePage);
    return WorkExperiencePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=work-experience.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalDetailsPage = (function () {
    function PersonalDetailsPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
    }
    PersonalDetailsPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        this.uploadProfileImage();
    };
    PersonalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetailsPage');
    };
    PersonalDetailsPage.prototype.uploadProfileImage = function () {
        if ((this.file.size >= 10000) && (this.file.size <= 1024000)) {
            console.log(this.file);
            this._http.fileupload(this.file);
        }
        else {
            alert('Upload files between 10Kb - 1Mb');
        }
    };
    PersonalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-details',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\personal-details\personal-details.html"*/'<!--\n  Generated template for the PersonalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Personal Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Address Proof</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Passport </h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>PAN</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Aadhaar Card</h6>\n            <ion-item>\n              <ion-label id="profile_image" color="primary" stacked></ion-label>\n              <ion-input type="file" accept="image/*" (change)="changeListener($event)"></ion-input>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <h6>Comments</h6>\n            <ion-item>\n              <ion-textarea placeholder="Enter your comments..."></ion-textarea>\n            </ion-item>\n            <ion-buttons end>\n              <button ion-button color="primary">Save</button>\n            </ion-buttons>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    &nbsp;\n    <button ion-button primary block>\n      Upload\n    </button>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\personal-details\personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
}());

//# sourceMappingURL=personal-details.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goTologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="bg-style">\n \n  <ion-grid>\n    <div>\n    <ion-row>\n      <ion-col text-center>\n     <img src="../../assets/imgs/Untitled.png">\n      </ion-col>\n    </ion-row>\n    </div>\n    <div>\n    <ion-row>\n      <ion-col text-center>\n         Global leader in providing seftware, engineering and operational services to Digital Service Providers\n      </ion-col>\n    </ion-row>\n    </div>\n    </ion-grid>\n  <ion-footer>\n      <button ion-button class="color" (click)="goTologin()" block class="custom-button"><h3>Login</h3></button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
    }
    HttpProvider.prototype.getRequest = function (url, options) {
        return this.http.get(url, options);
    };
    HttpProvider.prototype.postRequest = function (url, body, options) {
        return this.http.post(url, body, options);
    };
    HttpProvider.prototype.authenticate = function (uid, password) {
        return this.http.post("http://192.168.51.25:8080/loginPro", {
            "uid": uid,
            "password": password
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], HttpProvider);
    return HttpProvider;
    var _a;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		328,
		24
	],
	"../pages/add-user/add-user.module": [
		306,
		23
	],
	"../pages/admin/admin.module": [
		304,
		22
	],
	"../pages/dashboard/dashboard.module": [
		305,
		21
	],
	"../pages/documents-upload/documents-upload.module": [
		307,
		20
	],
	"../pages/existing-user/existing-user.module": [
		308,
		19
	],
	"../pages/feature/feature.module": [
		309,
		18
	],
	"../pages/graduation-certificates/graduation-certificates.module": [
		310,
		17
	],
	"../pages/help/help.module": [
		311,
		16
	],
	"../pages/home/home.module": [
		312,
		15
	],
	"../pages/introduction/introduction.module": [
		313,
		14
	],
	"../pages/main-dashboard/main-dashboard.module": [
		314,
		3
	],
	"../pages/notification/notification.module": [
		315,
		13
	],
	"../pages/personal-details/personal-details.module": [
		316,
		12
	],
	"../pages/school-certificates/school-certificates.module": [
		317,
		11
	],
	"../pages/support/support.module": [
		318,
		10
	],
	"../pages/view-details/view-details.module": [
		319,
		9
	],
	"../pages/view-documents/view-documents.module": [
		320,
		8
	],
	"../pages/view-educational/view-educational.module": [
		321,
		7
	],
	"../pages/view-personal/view-personal.module": [
		322,
		2
	],
	"../pages/view-professional/view-professional.module": [
		323,
		1
	],
	"../pages/view-technical/view-technical.module": [
		324,
		0
	],
	"../pages/view-user/view-user.module": [
		325,
		6
	],
	"../pages/welcome/welcome.module": [
		326,
		5
	],
	"../pages/work-experience/work-experience.module": [
		327,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmployeeProvider = (function () {
    function EmployeeProvider(http) {
        this.http = http;
        this.API = 'http://localhost:8080';
        console.log('Hello EmployeeProvider Provider');
    }
    EmployeeProvider.prototype.getDetails = function (value) {
        return this.http.post(this.API + '/initateemp', value);
    };
    EmployeeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EmployeeProvider);
    return EmployeeProvider;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeItems();
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifyPage');
    };
    NotificationPage.prototype.initializeItems = function () {
        this.items = [
            { name: 'Hasan ', avatar: 'http://placehold.it/100', group: 'Group 1' },
            { name: 'Amcik ', avatar: 'http://placehold.it/100', group: 'Group 1' },
            { name: 'Pezo ', avatar: 'http://placehold.it/100', group: 'Group 1' },
            { name: 'Achu ', avatar: 'http://placehold.it/100', group: 'Group 2' },
            { name: 'abi ', avatar: 'http://placehold.it/100', group: 'Group 2' },
            { name: 'Ami ', avatar: 'http://placehold.it/100', group: 'Group 2' },
            { name: 'Emmy ', avatar: 'http://placehold.it/100', group: 'Group 3' },
            { name: 'Danny ', avatar: 'http://placehold.it/100', group: 'Group 3' },
            { name: '6pack ', avatar: 'http://placehold.it/100', group: 'Group 3' },
            { name: 'Marco ', avatar: 'http://placehold.it/100', group: 'Group 4' },
            { name: 'Suresh  ', avatar: 'http://placehold.it/100', group: 'Group 4' },
            { name: 'Lancer ', avatar: 'http://placehold.it/100', group: 'Group 4' },
            { name: 'Aadi ', avatar: 'http://placehold.it/100', group: 'Group 3' }
        ];
        var groups = [
            {
                name: 'Group 1',
                count: 0,
                items: [],
            },
            {
                name: 'Group 2',
                count: 0,
                items: [],
            },
            {
                name: 'Group 3',
                count: 0,
                items: [],
            },
            {
                name: 'Group 4',
                count: 0,
                items: [],
            }
        ];
        for (var j = 0; j < groups.length; j++) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].group == groups[j].name) {
                    groups[j].count++;
                    groups[j].items.push(this.items[i]);
                }
            }
        }
        this.items = groups;
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Notifications</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content>\n    <ion-searchbar>\n  </ion-searchbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-md *ngFor="let item of items">\n          <ion-card>\n              <ion-item>\n          <h2>{{ item.name }}</h2>\n          <p>{{ item.count }} Candidates</p>\n            <ion-item *ngFor="let i of item.items">\n            <ion-avatar item-left>\n              <img src="{{i.avatar}}">\n            </ion-avatar>\n          </ion-item>\n        </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  </ion-content>\n    '/*ion-inline-end:"D:\propad\Development\frontend\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_documents_view_documents__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUserPage = (function () {
    function ViewUserPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
    }
    ViewUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewUserPage');
    };
    ViewUserPage.prototype.ngOnInit = function () {
        this.showfileds();
    };
    ViewUserPage.prototype.viewdocs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_documents_view_documents__["a" /* ViewDocumentsPage */]);
    };
    ViewUserPage.prototype.showfileds = function () {
        var _this = this;
        this._http.getRequest('http://localhost:8080/initateemp/get-users').subscribe(function (data) {
            console.log(data);
            _this.employeeTable = data;
        });
    };
    ViewUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-user',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\view-user\view-user.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Dashboard</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding >\n    \n<div class="item item-text-wrap" *ngFor="let emp of employeeTable">\n\n        <ion-card>\n            \n                <ion-grid>\n                    <ion-row class="center">\n                        <ion-col size="4" size-md>\n                            <ion-icon id="imageuser" name="image" item-end> </ion-icon>\n                        </ion-col>\n                        <ion-col class="bb"> EmpId:   {{emp.ie_emp_id}}\n                        </ion-col>\n                        <ion-col class="center" size="2" size-md>\n                            Name:  {{emp.ie_emp_name}}\n                        </ion-col>\n                    </ion-row>\n\n              \n                    <ion-row>\n                        <ion-col>Onboarding Date:  {{emp.ie_emp_doj | date: "dd/MM/yyyy"}}\n                            </ion-col>\n                        <ion-col>\n                            Status : {{emp.ie_status}}\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <button ion-button (click)="viewdocs()" primary block>View</button>\n            \n        </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\view-user\view-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], ViewUserPage);
    return ViewUserPage;
}());

//# sourceMappingURL=view-user.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_documents_upload_documents_upload__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_user_add_user__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_existing_user_existing_user__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_view_user_view_user__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_view_details_view_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_view_documents_view_documents__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_help_help__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_employee_employee__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_http_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_school_certificates_school_certificates__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_graduation_certificates_graduation_certificates__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_work_experience_work_experience__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_personal_details_personal_details__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_view_educational_view_educational__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_about_about__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_feature_feature__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_support_support__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_documents_upload_documents_upload__["a" /* DocumentsUploadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_user_add_user__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_existing_user_existing_user__["a" /* ExistingUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_view_user_view_user__["a" /* ViewUserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_view_details_view_details__["a" /* ViewDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_school_certificates_school_certificates__["a" /* SchoolCertificatesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_graduation_certificates_graduation_certificates__["a" /* GraduationCertificatesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_work_experience_work_experience__["a" /* WorkExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction__["a" /* IntroductionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_view_documents_view_documents__["a" /* ViewDocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_view_educational_view_educational__["a" /* ViewEducationalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_feature_feature__["a" /* FeaturePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documents-upload/documents-upload.module#DocumentsUploadPageModule', name: 'DocumentsUploadPage', segment: 'documents-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/existing-user/existing-user.module#ExistingUserPageModule', name: 'ExistingUserPage', segment: 'existing-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feature/feature.module#FeaturePageModule', name: 'FeaturePage', segment: 'feature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/graduation-certificates/graduation-certificates.module#GraduationCertificatesPageModule', name: 'GraduationCertificatesPage', segment: 'graduation-certificates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/introduction/introduction.module#IntroductionPageModule', name: 'IntroductionPage', segment: 'introduction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-dashboard/main-dashboard.module#MainDashboardPageModule', name: 'MainDashboardPage', segment: 'main-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details/personal-details.module#PersonalDetailsPageModule', name: 'PersonalDetailsPage', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school-certificates/school-certificates.module#SchoolCertificatesPageModule', name: 'SchoolCertificatesPage', segment: 'school-certificates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-details/view-details.module#ViewDetailsPageModule', name: 'ViewDetailsPage', segment: 'view-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-documents/view-documents.module#ViewDocumentsPageModule', name: 'ViewDocumentsPage', segment: 'view-documents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-educational/view-educational.module#ViewEducationalPageModule', name: 'ViewEducationalPage', segment: 'view-educational', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-personal/view-personal.module#ViewPersonalPageModule', name: 'ViewPersonalPage', segment: 'view-personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-professional/view-professional.module#ViewProfessionalPageModule', name: 'ViewProfessionalPage', segment: 'view-professional', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-technical/view-technical.module#ViewTechnicalPageModule', name: 'ViewTechnicalPage', segment: 'view-technical', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-user/view-user.module#ViewUserPageModule', name: 'ViewUserPage', segment: 'view-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work-experience/work-experience.module#WorkExperiencePageModule', name: 'WorkExperiencePage', segment: 'work-experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_user_add_user__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_existing_user_existing_user__["a" /* ExistingUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_view_user_view_user__["a" /* ViewUserPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_documents_upload_documents_upload__["a" /* DocumentsUploadPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_view_details_view_details__["a" /* ViewDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_school_certificates_school_certificates__["a" /* SchoolCertificatesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_graduation_certificates_graduation_certificates__["a" /* GraduationCertificatesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_work_experience_work_experience__["a" /* WorkExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction__["a" /* IntroductionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_view_documents_view_documents__["a" /* ViewDocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_feature_feature__["a" /* FeaturePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_view_educational_view_educational__["a" /* ViewEducationalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_employee_employee__["a" /* EmployeeProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_http_http__["a" /* HttpProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\propad\Development\frontend\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction_introduction__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, _http, fb, navParams) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this.fb = fb;
        this.navParams = navParams;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this._http.authenticate(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (data) {
            console.log(data);
            _this.status = data["status"];
            // this.person=data["person"];
            // this.department=this.person["department"];
            // console.log(this.department);
            if (_this.status == 200) {
                sessionStorage.setItem('username', _this.loginForm.value.username);
                sessionStorage.setItem('password', _this.loginForm.value.password);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__introduction_introduction__["a" /* IntroductionPage */]);
            }
            else
                alert("Incorrect Credentials");
            // this.status == 200 ? this.navCtrl.setRoot(DashboardPage) : alert("incorrect credentials");
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.gotoadminpage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__admin_admin__["a" /* AdminPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <div class="divb"></div>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n\n    <div id="cardcenter" padding>\n\n\n      <ion-grid>\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input class="borderBtm" type="text"  [(ngModel)]="username" formControlName="username" autocomplete="off"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input class="borderBtm" type="password"  [(ngModel)]="password" formControlName="password" autocomplete="off"></ion-input>\n        </ion-item>\n        <button ion-button primary block>\n      LOG IN\n    </button>\n      </ion-grid>\n    </div>\n  </form>\n  <div padding>\n    <button ion-button outline color="primary" (click)="gotoadminpage()">\n    ADMIN LOG IN\n   </button></div>\n\n</ion-content>'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_documents_view_documents__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ViewDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewDetailsPage = (function () {
    function ViewDetailsPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.isOn = false;
    }
    ViewDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewDetailsPage');
        this.getData();
    };
    ViewDetailsPage.prototype.getButtonText = function () {
        return "Switch " + (this.isOn ? 'Off' : 'On');
    };
    ViewDetailsPage.prototype.setState = function () {
        this.isOn = !this.isOn;
    };
    ViewDetailsPage.prototype.toggleDetails = function () {
        this.isOn = !this.isOn;
    };
    ViewDetailsPage.prototype.ngOnInit = function () {
    };
    ViewDetailsPage.prototype.getData = function () {
        this.employeeTable = this.navParams.data["a"];
    };
    ViewDetailsPage.prototype.viewDocs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_documents_view_documents__["a" /* ViewDocumentsPage */]);
    };
    ViewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-details',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\view-details\view-details.html"*/'<!--\n  Generated template for the ViewDocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="!isOn" center>{{employeeTable?.ie_emp_name}}</ion-title>\n      <ion-searchbar *ngIf="isOn"></ion-searchbar>\n    <ion-buttons end>\n      <button class="searchbutton" (click)="toggleDetails()"><ion-icon name="search" class="search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="item item-text-wrap" >\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>Employee ID </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{employeeTable?.ie_emp_id}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>Email ID </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{employeeTable?.ie_emp_email}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>1st Level Interviewer </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{employeeTable?.ie_int1}}</ion-col>\n      </ion-row>\n    </ion-grid>\n     <ion-grid>\n      <ion-row>\n        <ion-col>2nd Level Interviewer </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{employeeTable?.ie_int2}}</ion-col>\n      </ion-row>\n    </ion-grid>\n     <ion-grid>\n      <ion-row>\n        <ion-col>DOJ </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{employeeTable?.ie_emp_doj | date:\'dd/MM/yyyy\'}}</ion-col>\n      </ion-row>\n    </ion-grid>\n     <ion-grid>\n      <ion-row>\n        <ion-col>Status </ion-col>\n        <ion-col>:</ion-col>\n        <ion-col>{{employeeTable?.ie_status}}</ion-col>\n      </ion-row>\n    </ion-grid>\n \n  <div>\n    <button ion-button primary block  (click)="viewDocs()">View Documents</button>\n  </div>\n  \n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\view-details\view-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], ViewDetailsPage);
    return ViewDetailsPage;
}());

//# sourceMappingURL=view-details.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_educational_view_educational__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViewDocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewDocumentsPage = (function () {
    function ViewDocumentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewDocumentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewDocumentsPage');
    };
    ViewDocumentsPage.prototype.viewEdu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_educational_view_educational__["a" /* ViewEducationalPage */]);
    };
    ViewDocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-documents',template:/*ion-inline-start:"D:\propad\Development\frontend\src\pages\view-documents\view-documents.html"*/'<!--\n  Generated template for the ViewDocumentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar color="primary">\n\n    <ion-title>Documents</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div class="Adjust">\n \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="viewEdu()">\n            <img src="../assets/imgs/Graduate icon.png">\n            <h6>Educational Certificates</h6>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="viewTech()">\n            <img src="../assets/imgs/importent.png">\n            <h6>Technical Certificates</h6>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="viewPer()">\n            <img src="../assets/imgs/Personal icon.png">\n            <h6>Personal Documents</h6>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="viewProf()">\n            <img src="../assets/imgs/experience.png">\n            <h6>Professional Documents </h6>\n\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\propad\Development\frontend\src\pages\view-documents\view-documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewDocumentsPage);
    return ViewDocumentsPage;
}());

//# sourceMappingURL=view-documents.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map
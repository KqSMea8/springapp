import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  {DashboardPage } from '../pages/dashboard/dashboard';
import { DocumentsUploadPage } from '../pages/documents-upload/documents-upload';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { AdminPage } from '../pages/admin/admin';
import { AddUserPage } from '../pages/add-user/add-user';
import { ExistingUserPage } from '../pages/existing-user/existing-user';
import { ViewUserPage } from '../pages/view-user/view-user';
import { NotificationPage } from '../pages/notification/notification';
import { ViewDocumentPage } from '../pages/view-document/view-document';
import {HelpPage} from '../pages/help/help';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeProvider } from '../providers/employee/employee';
import { HttpClientModule } from '@angular/common/http';
import { HttpProvider } from '../providers/http/http'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    DocumentsUploadPage,
    AdminPage,
    AddUserPage,
    ExistingUserPage,
    ViewUserPage,
    NotificationPage,
    ViewDocumentPage,
    NotificationPage,
    HelpPage
  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,
    AddUserPage,
    ExistingUserPage,
    ViewUserPage,
    DashboardPage,
    DocumentsUploadPage,
    ViewDocumentPage,
    NotificationPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeeProvider,
    HttpProvider
  ]
})
export class AppModule {}

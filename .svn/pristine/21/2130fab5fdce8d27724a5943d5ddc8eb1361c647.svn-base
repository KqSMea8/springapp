import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErrorHandler, NgModule, OnInit } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DocumentsUploadPage } from '../pages/documents-upload/documents-upload';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AdminPage } from '../pages/admin/admin';
import { AddUserPage } from '../pages/add-user/add-user';
import { ExistingUserPage } from '../pages/existing-user/existing-user';
import { ViewUserPage } from '../pages/view-user/view-user';
import { NotificationPage } from '../pages/notification/notification';
import { ViewDetailsPage } from '../pages/view-details/view-details';
import { ViewDocumentsPage } from '../pages/view-documents/view-documents';
import { HelpPage } from '../pages/help/help';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeProvider } from '../providers/employee/employee';
import { HttpClientModule } from '@angular/common/http';
import { HttpProvider } from '../providers/http/http';
import { SchoolCertificatesPage } from '../pages/school-certificates/school-certificates';
import { GraduationCertificatesPage } from '../pages/graduation-certificates/graduation-certificates';
import { WorkExperiencePage } from '../pages/work-experience/work-experience';
import { PersonalDetailsPage } from '../pages/personal-details/personal-details';
import { IntroductionPage } from '../pages/introduction/introduction';
import { ViewPersonalPage } from '../pages/view-personal/view-personal';
import { ViewEducationalPage } from '../pages/view-educational/view-educational';
import { ViewProfessionalPage } from '../pages/view-professional/view-professional';
import { ViewTechnicalPage } from '../pages/view-technical/view-technical';
import { AboutPage } from '../pages/about/about';
import { FeaturePage } from '../pages/feature/feature';
import { SupportPage } from '../pages/support/support';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    DashboardPage,
    DocumentsUploadPage,
    AdminPage,
    AddUserPage,
    ExistingUserPage,
    ViewUserPage,
    NotificationPage,
    ViewDetailsPage,
    NotificationPage,
    HelpPage,
    SchoolCertificatesPage,
    GraduationCertificatesPage,
    WorkExperiencePage,
    PersonalDetailsPage,
    IntroductionPage,
    ViewDocumentsPage,
    ViewEducationalPage,
    AboutPage,
    FeaturePage,
    SupportPage,
    ViewPersonalPage,
    ViewProfessionalPage,
    ViewTechnicalPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    AdminPage,
    AddUserPage,
    ExistingUserPage,
    ViewUserPage,
    DashboardPage,
    DocumentsUploadPage,
    ViewDetailsPage,
    NotificationPage,
    HelpPage,
    SchoolCertificatesPage,
    GraduationCertificatesPage,
    WorkExperiencePage,
    PersonalDetailsPage,
    IntroductionPage,
    ViewDocumentsPage,
    AboutPage,
    FeaturePage,
    SupportPage,
    ViewEducationalPage,
    ViewPersonalPage,
    ViewProfessionalPage,
    ViewTechnicalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EmployeeProvider,
    HttpProvider
  ]
})
export class AppModule { }

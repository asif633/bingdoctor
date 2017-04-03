import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/form/form.component';
import { LogsComponent } from './logs/logs.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/form/form.component';
import { TemplatesComponent } from './templates/templates.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';
import { EmailTemplateComponent } from './templates/email/email.component';
import { EditorTemplateComponent } from './templates/editor/editor.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { ChartComponent } from '../components/chart/chart.component';

import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BingDoctorComponent } from './templates/bing-doctor/bing-doctor.component';
import { FrontPageComponent } from './templates/bing-doctor/front-page/front-page.component';
import { CategoryTabComponent } from './templates/bing-doctor/category-tab/category-tab.component';
import { SearchFormComponent } from './templates/bing-doctor/search-form/search-form.component';
import { NavbarComponent } from './templates/bing-doctor/navbar/navbar.component';
import { ListingPageComponent } from './templates/bing-doctor/listing-page/listing-page.component';
import { DoctorListingItemComponent } from './templates/bing-doctor/doctor-listing-item/doctor-listing-item.component';
import { ClinicListingItemComponent } from './templates/bing-doctor/clinic-listing-item/clinic-listing-item.component';
import { FrontPageCoverComponent } from './templates/bing-doctor/front-page-cover/front-page-cover.component';
import { DoctorDetailComponent } from './templates/bing-doctor/doctor-detail/doctor-detail.component';
import { DoctorDetailTopComponent } from './templates/bing-doctor/doctor-detail-top/doctor-detail-top.component';
import { DoctorDetailTabsComponent } from './templates/bing-doctor/doctor-detail-tabs/doctor-detail-tabs.component';
import { DoctorDetailEduComponent } from './templates/bing-doctor/doctor-detail-edu/doctor-detail-edu.component';
import { DoctorFeedbackComponent } from './templates/bing-doctor/doctor-feedback/doctor-feedback.component';
import { DoctorFeedbackItemComponent } from './templates/bing-doctor/doctor-feedback-item/doctor-feedback-item.component';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    DashboardProductComponent,
    ProductOverviewComponent,
    ProductStatsComponent,
    ProductFeaturesComponent,
    FeaturesFormComponent,
    UsersComponent,
    UsersFormComponent,
    LogsComponent,
    FormComponent,
    DetailComponent,
    LoginComponent,
    ChartComponent,
    TemplatesComponent,
    DashboardTemplateComponent,
    EmailTemplateComponent,
    EditorTemplateComponent,
    BingDoctorComponent,
    FrontPageComponent,
    CategoryTabComponent,
    SearchFormComponent,
    NavbarComponent,
    ListingPageComponent,
    DoctorListingItemComponent,
    ClinicListingItemComponent,
    FrontPageCoverComponent,
    DoctorDetailComponent,
    DoctorDetailTopComponent,
    DoctorDetailTabsComponent,
    DoctorDetailEduComponent,
    DoctorFeedbackComponent,
    DoctorFeedbackItemComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

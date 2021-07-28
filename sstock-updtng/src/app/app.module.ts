import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TblockComponent } from './tblock/tblock.component';
import { FeatureComponent } from './feature/feature.component';
import { PricetComponent } from './pricet/pricet.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TblockComponent,
    FeatureComponent,
    PricetComponent,
    ClientComponent,
    ContactComponent,
    CopyrightComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'fileupload',component:FileuploadComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

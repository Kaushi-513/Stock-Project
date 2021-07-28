import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileuploadComponent } from './fileupload/fileupload.component';



const routes: Routes = [
  { path:'', component:BannerComponent},
  { path: 'login', component: LoginComponent },
  { path:'register',component:RegisterComponent},
  { path:'dashboard',component:DashboardComponent},
  {path:'fileupload',component:FileuploadComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

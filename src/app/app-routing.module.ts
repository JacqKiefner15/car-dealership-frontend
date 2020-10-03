import { ContactFormComponent } from './contact-form/contact-form.component';


import { AppointmentsComponent } from './appointments/appointments.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'signup',
  component: SignupComponent,
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path: 'appointment',
  component: AppointmentsComponent,
  pathMatch: 'full'
},

{path: 'contact',
component: ContactFormComponent,
pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

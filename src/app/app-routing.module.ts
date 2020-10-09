import { CarsComponent } from './cars/cars.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

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

{path: 'comment',
component: CommentFormComponent,
pathMatch: 'full'
},

{path: 'cars',
component: CarsComponent,
pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

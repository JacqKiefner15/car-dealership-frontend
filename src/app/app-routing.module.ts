import { SingleCarComponent } from './single-car/single-car.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
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

{
  path: 'comment',
component: CommentFormComponent,
pathMatch: 'full'
},
{
  path: 'employee',
  component: EmployeePortalComponent,
  pathMatch: 'full'
}]

const child: Routes = [
{path: 'cars', component: CarsComponent},
{
  path: 'cars/:id',
  component: SingleCarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forChild(child)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

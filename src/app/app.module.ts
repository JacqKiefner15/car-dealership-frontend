import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleLeft, faAngleRight, faArrowRight,
  faCircle, faEdit, faEye, faEyeSlash, faKey, faPen, faPlus,
  faSearch, faSignInAlt, faSignOutAlt, faSpinner, faStar, faStarHalfAlt,
  faTrashAlt, faUpload,
  faUser, faUserPlus, faVideo
} from '@fortawesome/free-solid-svg-icons';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailService } from './email.service';
import { AuthorizationHeaderService } from './shared/services/authorization-header.service';
import { CarService } from './shared/services/car.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { UserService } from './shared/services/user.service';
import { SignupComponent } from './signup/signup.component';
import { CarsComponent } from './cars/cars.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AppointmentsComponent,
    CommentFormComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule

  ],
  providers: [
    CarService,
    UserService,
    LocalStorageService,
    EmailService,
    { provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationHeaderService,
  multi: true
}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (
    private library: FaIconLibrary
  ) {
    this.library.addIcons(
      faSpinner, faAngleLeft, faAngleRight, faPlus, faStar, faStarHalfAlt, faArrowRight, faUpload, faVideo,
      faEdit, faPen, faTrashAlt, faSearch, faUser, faKey, faEye, faEyeSlash, faSignInAlt, faSignOutAlt, faUserPlus, faCircle
    )
  }
}

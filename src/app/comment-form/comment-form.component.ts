import { EmailData } from './../shared/services/models/emailData';
import { EmailService } from './../email.service';
import { User } from './../shared/services/models/user';
import { UserService } from './../shared/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './must-match.validator';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit, OnDestroy {
  form: FormGroup
  formValues: any
  submitting = false
  hasError = false
  errorMsg: string
  currentUser: User
  private subs = new Subscription()
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private UserService: UserService,
    private EmailService: EmailService
  ) { }

  ngOnInit(): void {
    this.createFormControls()
    this.createForm()
  }

  createFormControls() {
    this.formValues = {
      email: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      need: ['', Validators.compose([Validators.required])],
      comment: ['', Validators.compose([Validators.required])],
    }
  }

  createForm() {
    this.form = this.fb.group(this.formValues)
  }
  // convenience getter_ for form controls
  get f() {
    if (this.form && this.form.controls)
 {
      return this.form.controls
 }  }


  submitForm() {
    this.hasError = false
    this.submitting = true
    if (this.form.invalid) {
      this.hasError = true
      this.submitting = false

    }
      const form = this.form.value
      const params = {
        email: form.email,
        first_name: form.firstName,
        last_name: form.lastName,
        need: form.need,
        comment: form.comment

      }
      this.EmailService.sendEmail(params)
             .subscribe(
               () => {},
               err => console.log("this err",err)
             )
           }


  // pasted in from contact-form component.ts

  // onSubmit() {
  //        console.log('on submit');
  //        if (this.form.invalid) {
  //         this.hasError = true
  //         this.submitting = false
  //         console.log('invalid');
  //       }
  //        const form = this.form.value
  //        const params = {
  //         first_name: form.firstName,
  //         last_name: form.lastName,
  //         email: form.email,
  //         need: form.need,
  //         message: form.messsage
  //        }
  //        this.emailService.sendEmail(params)
  //        .subscribe(
  //          () => {},
  //          err => console.log("this err",err)
  //        )
  //      }

  cancelForm() {
    this.form.reset()
  }

  ngOnDestroy() {
      this.subs.unsubscribe()
  }

}


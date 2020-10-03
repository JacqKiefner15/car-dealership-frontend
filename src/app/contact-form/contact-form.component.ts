import { EmailData } from './../shared/services/models/emailData';
import { EmailService } from './../email.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  form: FormGroup
  formValues: any
  submitting = false
  hasError = false
  errorMsg: string
  currentUser: any
  private subs = new Subscription()
  emailForm: EmailData[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private emailService: EmailService

  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formValues
  }
  // convenience getter_ for form controls


  submitForm() {
    this.hasError = false
    this.submitting = true
    if (this.form.invalid) {
      this.hasError = true
      this.submitting = false
    }
      const form = this.form.value
      const params = {
        first_name: form.any,
        last_name: form.any,
        email: form.email,
        need: form.any,
        message: form.any,

      }
    }



//    onSubmit( email, first_name, last_name, need, comment) {
//      this.emailService.sendEmail({
//        from: `Mailgun Sandbox
//        <postmaster@sandboxyourapikeysetXXXXXX.mailgun.org>`,
//        email,
//        first_name,
//        last_name,
//        need,
//        comment,
//  })
//      .subscribe(
//        () => {},
//        err => console.log(err)
//      )
//    }
//   cancelForm() {
//     this.form.reset()
//   }

   ngOnDestroy(): void {
      this.subs.unsubscribe()
   }
}

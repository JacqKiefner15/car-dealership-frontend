// import { EmailData } from './../shared/services/models/emailData';
// import { EmailService } from './../email.service';
// import { Subscription } from 'rxjs';
// import { Router } from '@angular/router';
// import { async } from '@angular/core/testing';
// import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { ReactiveFormsModule } from '@angular/forms'
// import { FormControl } from '@angular/forms';


// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.scss']
// })
// export class ContactFormComponent implements OnInit, OnDestroy {
//   // name = new FormControl('')
//   // contactForm: FormGroup({
//   //   firstName: new FormControl(''),
//   //   lastName: new FormControl(''),
//   //   email: new FormControl(''),
//   //   need: new FormControl(''),
//   //   comment: new FormControl(''),

//   // })
//   contactForm: FormGroup
//   formValues: any
//   submitting = false
//   hasError = false
//   errorMsg: string
//   currentUser: any
//   private subs = new Subscription()

//   emailForm: EmailData[] = [];

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private emailService: EmailService

//   ) { }
//   ngOnInit(): void {
//     this.createFormControls;
//     this.createForm();
//   }

//   createFormControls() {
//     this.formValues = {
//       firstName: ['', Validators.compose([Validators.required])],
//       lastName: ['', Validators.compose([Validators.required])],
//       email: ['', Validators.compose([Validators.required])],
//       need: ['', Validators.compose([Validators.required])],
//       comment: ['', Validators.compose([Validators.required,])],
//     }
//   }

//   createForm() {
//     this.contactForm = this.fb.group(this.formValues)
//   }
//   get f() {
//     if (this.contactForm && this.contactForm.controls)
//  {
//       return this.contactForm.controls
//  }  }

//   submitForm() {
//     this.hasError = false
//     this.submitting = true
//     if (this.contactForm.invalid) {
//       this.hasError = true
//       this.submitting = false
//     }
//       const form = this.contactForm.value
//       const params = {
//         first_name: form.firstName,
//         last_name: form.lastName,
//         email: form.email,
//         need: form.need,
//         message: form.message,
//       }
//     }



//    onSubmit() {
//      console.log('on submit');
//      if (this.contactForm.invalid) {
//       this.hasError = true
//       this.submitting = false
//       console.log('invalid');
//     }
//      const form = this.contactForm.value
//      const params = {
//       first_name: form.firstName,
//       last_name: form.lastName,
//       email: form.email,
//       need: form.need,
//       message: form.messsage
//      }
//      this.emailService.sendEmail(params)
//      .subscribe(
//        () => {},
//        err => console.log("this err",err)
//      )
//    }

//   cancelForm() {
//     this.contactForm.reset()
//   }

//    ngOnDestroy(): void {
//       this.subs.unsubscribe()
//    }
// }

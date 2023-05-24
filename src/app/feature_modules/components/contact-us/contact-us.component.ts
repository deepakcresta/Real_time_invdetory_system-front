import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  isSubmitting: boolean | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      phoneNumber: [
        undefined,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: [
        undefined,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.maxLength(80),
          Validators.minLength(8),
        ],
      ],
      message: [undefined, Validators.required],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  onSendForm(contact: any) {
    this.submitted = true;
    console.log(contact);
    if (this.contactForm.valid) {
      this.sharedService.addContact(contact).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          alert('Email Send Successfully.');
          this.reloadComponent();

        },
        (error: any) => {
          this.isSubmitting = false;
          error('Error on sending Email');
        }
      );
    }
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}

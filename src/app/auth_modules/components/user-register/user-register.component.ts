import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

class UntypedFormGroup {
}

@Component({
  selector: 'deepak-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  // disbursementSuccessfulForm: UntypedFormGroup = new UntypedFormGroup({});
  registerForm: FormGroup = new FormGroup({})
  submitted: boolean =false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  get form(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      userName: [undefined],
      password: [undefined],
      email: [undefined],
      contactNumber: [undefined],
      permanentAddress: [undefined],
      temporaryAddress: [undefined]

    })
  }
  back(){
    this.location.back();
  }
  onRegisterUser(){
  }
}

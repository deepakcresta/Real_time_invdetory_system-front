import { Component, OnInit } from '@angular/core';
import {AbstractControl, AnyForUntypedForms, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

class UntypedFormGroup {
}

@Component({
  selector: 'deepak-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  title: string = 'Sign In  To Restaurant Real Time Inventory';


  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){

  }
  get form() : {[key:string]: AbstractControl}{
    return this.loginForm.controls
  }

}

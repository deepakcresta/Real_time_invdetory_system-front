import { Component, OnInit } from '@angular/core';
import {AbstractControl, AnyForUntypedForms, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {LoginModal} from "../modals/login.modal";

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
  title: string = ' Restaurant Inventory System';


  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.loginForm = this.formBuilder.group({
      username: [undefined, Validators.compose([Validators.required])],
      password: [undefined, Validators.compose([Validators.required])]
    })

  }
  get form() : {[key:string]: AbstractControl}{
    return this.loginForm.controls
  }
  onUserLogin(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.loginUser(this.loginForm.value as LoginModal) .subscribe(
      {
        next:(value: any)=>{
          this.loginForm.reset();
          console.log("User Login Successful")
          this.router.navigate(['/feature-modules/home']);
        },error:(err :any) =>{
          console.log("Unable to login the user")
          this.router.navigate(['/feature-modules/home']);
        }
      });

  }
  onNavigateToRegister(){
    this.router.navigate(['/register']);
  }
}

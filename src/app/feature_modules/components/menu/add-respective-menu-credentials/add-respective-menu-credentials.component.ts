import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../../service/shared.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'deepak-add-respective-menu-credentials',
  templateUrl: './add-respective-menu-credentials.component.html',
  styleUrls: ['./add-respective-menu-credentials.component.scss']
})
export class AddRespectiveMenuCredentialsComponent implements OnInit {
  menuCredentialsForm: FormGroup = new FormGroup({});
  submitted: boolean = false;



  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private toastService: ToastrService,
    private router: Router,
    private location:Location
  ) {
  }


  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.menuCredentialsForm = this.formBuilder.group({
      // menuName: [undefined, Validators.compose([Validators.required])],
      // menuType: [undefined, Validators.compose([Validators.required])],
    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.menuCredentialsForm.controls;
  }

  onSaveMenu() {
    this.submitted = true;
    if (this.menuCredentialsForm.invalid) {
      return;
    }
  }
  onNavigateBack(){
    this.location.back()
  }
}

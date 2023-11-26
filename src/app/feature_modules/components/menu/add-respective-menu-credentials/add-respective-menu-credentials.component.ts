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
  menuForm: FormGroup = new FormGroup({});
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
    this.menuForm = this.formBuilder.group({
      menuName: [undefined, Validators.compose([Validators.required])],
      menuType: [undefined, Validators.compose([Validators.required])],

    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.menuForm.controls;
  }

  onSaveMenu() {
    this.submitted = true;
    console.log("user details: ", this.menuForm.value);
    if (this.menuForm.invalid) {
      return;
    }
    this.sharedService.addMenu(this.menuForm.value).subscribe({
      next: (value: any) => {
        console.log("menu form valley", value);
        this.router.navigate(['/feature-modules/menu-list'])
        console.log("menu form valley", value);
        this.toastService.success("Menu added successfully!")
      }, error: (error: any) => {
        this.toastService.error("Error on adding the menu")
      }

    })
  }

  onNavigateBack(){
    this.location.back()
  }
  onCancel(){
    this.menuForm.reset();
  }
}

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import {NgModule} from '@angular/core';
import {SharedService} from "../../../service/shared.service";
import {Location} from "@angular/common";

@Component({
  selector: 'deepak-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  menuForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  dropdownOptions = [
    {label: 'Momo', value: 'momo'},
    {label: 'Chowmine', value: 'chowmine'},
    {label: 'Cold Drinks 3', value: 'coldDrinks'},
    {label: 'Hard Drinks', value: 'hardDrinks'},
    {label: 'Snacks', value: 'snacks'},
    {label: 'Soup', soup: 'soup'}
  ];
  units = [
    {label: 'gram', value: 'gram'},
    {label: 'Kilogram', value: 'kilogram'},
    {label: 'MilliLiter', value: 'milliLiter'},
    {label: 'Liter', value: 'liter'}
  ]
  selectedOption: any; // Holds the selected option


  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private toastService: ToastrService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.menuForm = this.formBuilder.group({
      menuName: [undefined, Validators.compose([Validators.required])],
      menuType: [undefined, Validators.compose([Validators.required])],
      unit:[undefined],
      menusCredentials: new FormArray([])
    });
    this.initContacts();
  }

  initContacts() {
    (this.menuForm.get('menusCredentials') as FormArray).push(
      this.formBuilder.group({
        credentialName: [undefined, Validators.compose([Validators.required])],
        quantity: [undefined, Validators.compose([Validators.required])],
        unit:[undefined, Validators.compose([Validators.required])]
      })
    )
  }

  get form(): { [key: string]: AbstractControl } {
    return this.menuForm.controls;
  }

  get getContactForm(): FormArray {
    return (this.menuForm.get('menusCredentials') as FormArray);
  }


  onSelectionChange() {
    console.log('Selected option:', this.selectedOption);
  }

  onSaveMenu() {
    // this.submitted = true;
    // console.log("form value",this.menuForm.value);
    // if (this.menuForm.invalid) {
    //   return;
    // }
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
  addMore() {
    this.initContacts();
  }

  onNavigateBack() {
    this.location.back();
  }


  deleteContactForm(i: number) {
    (this.menuForm.get('menusCredentials') as FormArray).removeAt(i);
  }
}

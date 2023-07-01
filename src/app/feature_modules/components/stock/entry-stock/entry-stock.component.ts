import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {SharedService} from "../../../service/shared.service";
import {StockResponseModalModal} from "../../../modal/StockResponseModal.modal";

@Component({
  selector: 'deepak-entry-stock',
  templateUrl: './entry-stock.component.html',
  styleUrls: ['./entry-stock.component.scss']
})
export class EntryStockComponent implements OnInit {
  stockEntryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  isSubmitting: boolean | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.stockEntryForm = this.formBuilder.group({
      stockName: [undefined],
      quantity: [undefined],
      brandName: [undefined],
      category: [undefined],
      expiryDate: [undefined],
      manufacturingDate: [undefined],
      unit:[undefined],

    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.stockEntryForm.controls;
  }

  onGoBack() {
    this.location.back();
  }

  onSaveStockLevel() {
      this.submitted = true;
      console.log("user details: ", this.stockEntryForm.value);
      if (this.stockEntryForm.invalid) {
        return;
      }
      this.sharedService.addStock(this.stockEntryForm.value as StockResponseModalModal).subscribe({
        next: (value: any) => {
          this.stockEntryForm.reset();
          this.location.back();
          console.log("user save successfully !");
          console.log("value",value);
          this.router.navigate(['/feature-modules/total-stock'])
        }, error: (err: any) => {
          console.log("unable to save user !");
          this.router.navigate(['/home']);
        }
      });
    }

}

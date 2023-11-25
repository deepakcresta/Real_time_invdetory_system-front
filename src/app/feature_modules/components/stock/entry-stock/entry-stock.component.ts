import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DatePipe, Location} from "@angular/common";
import {SharedService} from "../../../service/shared.service";
import {StockResponseModalModal} from "../../../modal/StockResponseModal.modal";
import {ToastrService} from "ngx-toastr";

// import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'deepak-entry-stock',
  templateUrl: './entry-stock.component.html',
  styleUrls: ['./entry-stock.component.scss']
})
export class EntryStockComponent implements OnInit {
  stockEntryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  finalData :any;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private sharedService: SharedService,
    private toastService: ToastrService,
  private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.stockEntryForm = this.formBuilder.group({
      stockName: [undefined, Validators.compose([Validators.required])],
      quantity: [undefined, Validators.compose([Validators.required])],
      brandName: [undefined, Validators.compose([Validators.required])],
      category: [undefined, Validators.compose([Validators.required])],
      expiryDate: [undefined],
      manufacturingDate: [undefined],
      quantityUnit: [undefined, Validators.compose([Validators.required])],

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
    finalData: this.stockEntryForm.value;
    console.log("dfgdfgd",this.stockEntryForm.value);
    this.sharedService.addStock(this.stockEntryForm.value).subscribe({
      next: (value: any) => {

        console.log("value", value);
        this.toastService.success("Stock Added Successfully");
        this.router.navigate(['/feature-modules/total-stock'])
      }, error: (err: any) => {
        this.toastService.error("Error on adding the stock");
        this.router.navigate(['/feature-modules/total-stock'])
      }
    });
  }

  onNavigateBack() {
    this.location.back();
  }

  onCancel() {
    this.stockEntryForm.reset();
  }
}

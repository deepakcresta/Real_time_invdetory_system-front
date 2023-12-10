import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe, Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'deepak-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {
  stockEntryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  averageQuantity: number | null = null;
  allStockList: Array<any> = new Array<any>();
  arimaListValue: any;


  finalData: any;
  Average: any;
  isFirstFieldTouched: boolean =true;
  private showPreditData: any;

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
    this.listAllStocks();

    this.buildForm();
    // this.updateAverageQuantity();

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
      predictedQuantity: [undefined]
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
    console.log("dfgdfgd", this.stockEntryForm.value);

    this.stockEntryForm.value.manufacturingDate.date ? this.stockEntryForm.value.manufacturingDate = this.stockEntryForm.value.manufacturingDate.date : '';
    this.stockEntryForm.value.expiryDate.date ? this.stockEntryForm.value.expiryDate = this.stockEntryForm.value.expiryDate.date : '';
    this.sharedService.addStock(this.stockEntryForm.value).subscribe({
      next: (value: any) => {

        console.log("value", value);
        this.toastService.success("Stock Added Successfully");
        this.router.navigate(['/feature-modules/total-stock'])
      }, error: (err: any) => {
        this.toastService.error("Error on adding the stock");
      }
    });
  }

  onNavigateBack() {
    this.location.back();
  }

  onCancel() {
    this.stockEntryForm.reset();
  }

  listAllStocks() {
    this.sharedService.listAllStocks().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        // this.allStockList = response?.stocks?.forEach((f:any)=>{
        //   this.arimaListValue =f?.quantity;
        //
        // });
        this.allStockList = response?.stocks?.map((f: any) => f?.quantity);

        // Get the last five values from this.allStockList
        const lastFiveValues = this.allStockList.slice(-5);

        // Calculate the average of the last five values
        const sumOfLastFive = lastFiveValues.reduce((total, value) => total + (value || 0), 0);
   const averageOfLastFive = sumOfLastFive / Math.max(1, lastFiveValues.length);
        this.showPreditData= averageOfLastFive;
          console.log("Average of last five values:", averageOfLastFive);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }

  updateAverageQuantity() {
    // Check if there are at least 10 items in the list

    console.log("algorithm value", this.arimaListValue)
    if (this.allStockList.length >= 5) {
      // Calculate the average quantity of the last 10 items
      this.showPreditData;
    }
  }
  onQuantityFieldFocus() {
    // Additional logic when the quantity field is focused
    this.updateAverageQuantity();

    // Show a toast message with the average quantity
    if (this.showPreditData !== null) {
      this.toastService.success(`Predicted Quantity: ${this.showPreditData.toFixed(2)}`, 'Predicted Quantity');
    }
  }
}

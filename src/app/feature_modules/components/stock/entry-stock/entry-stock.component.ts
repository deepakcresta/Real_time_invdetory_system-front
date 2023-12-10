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
  isFirstFieldTouched = false
  allStockList: Array<any> = new Array<any>();
  averageQuantity: number | null = null;
  arimaListValue: any;

  finalData: any;

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
    this.updateAverageQuantity();

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
        this.allStockList = response?.stocks[0]?.stockName;
        debugger
        console.log("list",this.allStockList)
        let datea = this.allStockList?.filter(item => item?.quantity !== null && item?.quantity !== undefined && item?.quantity < 20);
        console.log("mero date", datea);
        console.log("al ", this.allStockList);

      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }

  updateAverageQuantity() {
    // Check if there are at least 10 items in the list
    this.arimaListValue = this.allStockList;
    console.log("algorithm value", this.arimaListValue)
    if (this.allStockList.length >= 5) {
      // Calculate the average quantity of the last 10 items
      const last10Items = this.allStockList?.slice(-5);
      const sum = last10Items.reduce((total, item) => total + item.quantity, 0);
      this.averageQuantity = sum / 5;
    }
  }
}

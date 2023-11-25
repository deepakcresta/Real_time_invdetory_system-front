import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'deepak-total-stock',
  templateUrl: './total-stock.component.html',
  styleUrls: ['./total-stock.component.scss']
})
export class TotalStockComponent implements OnInit {
  @Output() totalStocks: any;
  allStockList: Array<any> = new Array<any>();
  submitted: boolean = false;
  isSubmitting: boolean | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private sharedService: SharedService,
    private toastService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.listAllStocks();
  }

  onNavigateBack() {
    this.location.back();
  }

  onNewAdd() {
    this.router.navigate(['feature-modules/stock-entry']);
  }

  listAllStocks() {
    this.sharedService.listAllStocks().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        this.allStockList = response?.stocks;
        let datea = this.allStockList?.filter(item => item?.quantity !== null && item?.quantity !== undefined && item?.quantity < 20);
        console.log("mero date", datea);
        console.log("al ", this.allStockList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }


  onDeleteClick(id: number) {
    this.toastService.warning('Are you sure You want to delete it!')
    this.sharedService.deleteStockById(id).subscribe(
      {
        next: (response: any) => {
          this.listAllStocks();
          this.toastService.success("The Stock Deleted Sucessfully!")
          console.log(response)
        }
      }
    );
  }

  onEditStock(id: number | undefined) {
    this.router.navigate(['feature-modules/stock-entry']);
  }
}

import {Component, OnInit, Output} from '@angular/core';
import {SharedService} from "../service/shared.service";
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'deepak-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalStocks: any;
  allStockList: Array<any> = new Array<any>();
  submitted: boolean = false;
  dangerStock: any;

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
        this.dangerStock = datea?.length;
        this.totalStocks = response?.total;
        console.log("al ", this.totalStocks);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }
}

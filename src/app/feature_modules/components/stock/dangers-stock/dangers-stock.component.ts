import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";

@Component({
  selector: 'deepak-dangers-stock',
  templateUrl: './dangers-stock.component.html',
  styleUrls: ['./dangers-stock.component.scss']
})
export class DangersStockComponent implements OnInit {
  allStockList: Array<any> = new Array<any>();
  submitted: boolean = false;
  isSubmitting: boolean | undefined;
  dangerStockList :Array<any> = new Array<any>();


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    this.listAllStocks();
  }

  onGoBack() {
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
        this.dangerStockList = this.allStockList?.filter(item => item?.quantity !== null && item?.quantity !== undefined && item?.quantity < 20)

        console.log("al ",this.dangerStockList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }
  onNavigateBack(){
    this.location.back();
  }


  onDeleteClick() {
    //   this.sharedService.deleteUserById(id).subscribe(
    //     {
    //       next: (response: any) => {
    //         this.listAllStocks();
    //       }
    //     }
    //   );
  }
}

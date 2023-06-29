import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";

@Component({
  selector: 'deepak-total-stock',
  templateUrl: './total-stock.component.html',
  styleUrls: ['./total-stock.component.scss']
})
export class TotalStockComponent implements OnInit {
  // allStockList = [
  //   {
  //     stockName: " Rice",
  //     category: "normal goods",
  //     quantity: "1"
  //   },
  //   {
  //     stockName: " Rice",
  //     category: "normal goods",
  //     quantity: "1"
  //   },
  //   {
  //     stockName: " Rice",
  //     category: "normal goods",
  //     quantity: "1"
  //   },
  //   {
  //     stockName: " Rice",
  //     category: "normal goods",
  //     quantity: "1"
  //   }
  //

  // ]
  allStockList: Array<any> = new Array<any>();
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
      // .forEach((f:any)=>{
      //     console.log("f",f);
      //   })
        console.log("al ",this.allStockList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
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

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";

@Component({
  selector: 'deepak-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.scss']
})
export class StockDisplayComponent implements OnInit {

  allStockList =[
    {
      stockName:" Rice",
      category:"normal goods",
      quantity:"1"
    },
    {
      stockName: " Rice",
      category: "normal goods",
      quantity: "1"
    },
    {
      stockName: " Rice",
      category: "normal goods",
      quantity: "1"
    },
    {
      stockName: " Rice",
      category: "normal goods",
      quantity: "1"
    }


  ]
  submitted:boolean = false;
  isSubmitting: boolean | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private  sharedService: SharedService,
  ) { }

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
        this.allStockList = response.users;
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

import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";

@Component({
  selector: 'deepak-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  salesList=[
    {
      tableNumber:"1231",
      orderItems:"Chicken Momo",
      quantity:1,
      category:"momo",
      orderAt:'1:00'
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
    this.listAllSales();
  }

  onGoBack() {
    this.location.back();
  }

  onNewAdd() {
    this.router.navigate(['/stock-entry']);
  }

  listAllSales() {
    this.sharedService.listAllSales().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        this.salesList = response.users;
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }

  onDeleteClick() {
  //   this.sharedService.deleteSaleById(id).subscribe(
  //     {
  //       next: (response: any) => {
  //         this.listAllSales();
  //       }
  //     }
  //   );
  }
}


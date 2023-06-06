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
  allSaleList: Array<any> = new Array<any>();
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
        this.allSaleList = response.users;
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }

  onDeleteClick(id: number) {
    this.sharedService.deleteSaleById(id).subscribe(
      {
        next: (response: any) => {
          this.listAllSales();
        }
      }
    );
  }
}


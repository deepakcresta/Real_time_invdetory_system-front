import {Component, Input, OnInit} from '@angular/core';
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
  @Input() saleData: any;
  orderList: Array<any> = new Array<any>();
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
    this.router.navigate(['feature-modules/kitchen-order']);
  }

  listAllStocks() {
    this.sharedService.listAllOrders().subscribe({
      next: (response: any) => {
        console.log("all stocks listed: ", response);
        this.orderList = response?.orders;
        console.log("al ",this.orderList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }


  // onDeleteClick() {
  //     this.sharedService.deleteUserById(id).subscribe(
  //       {
  //         next: (response: any) => {
  //           this.listAllStocks();
  //         }
  //       }
  //     );
  // }
  onNavigateBack(){
    this.location.back();
  }
}

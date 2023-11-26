import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";
import {Location} from "@angular/common";

@Component({
  selector: 'deepak-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Array<any> = new Array<any>();
  submitted: boolean = false;
  isSubmitting: boolean | undefined;

  startDate: Date = new Date('2023-01-01T12:00:00'); // replace this with your start date
  endDate: Date = new Date();
  timeGap: Date = new Date();
  hour: any;
  minutes:number|undefined;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    this.listAllStocks();
    this.hourDifference()
  }

  onNavigateBack() {
    this.location.back();
  }

  onNewAdd() {
    this.router.navigate(['feature-modules/kitchen-order']);
  }

  listAllStocks() {
    this.sharedService.listAllOrders().subscribe({
      next: (response: any) => {
        let currentDate = response?.orders?.forEach((f: any) => {
          this.timeGap = f?.orderTime;
          console.log("dfsdfP", this.timeGap, "sdfsd", f.length)
        })
        console.log("current date", currentDate)
        console.log("all stocks listed: ", response?.orders[0]);

        console.log("all stocks listed: ", response?.orders?.forEach((f: any) => {
          f.length
        }));
        this.orderList = response?.orders;
        console.log("al ", this.orderList);
      },
      error: (error: any) => {
        console.log("unable to list all users: ", error);
      }
    });
  }

  // replace this with your start date
  onDeleteClick() {
    //   this.sharedService.deleteUserById(id).subscribe(
    //     {
    //       next: (response: any) => {
    //         this.listAllStocks();
    //       }
    //     }
    //   );
  }

  hourDifference(): number {
    debugger
    console.log("sdfsdf", this.timeGap)
    const duration = this.endDate.getTime() - this.timeGap.getTime();
    const hours = Math.floor(duration / (60 * 60 * 1000));
    this.hour = hours;
    return hours
  }

  minuteDifference(): number {
    const duration = this.endDate.getTime() - this.timeGap.getTime();
    const minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
    this.minutes = minutes;
    return minutes;
  }
}

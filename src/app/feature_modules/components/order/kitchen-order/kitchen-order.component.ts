import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../../service/shared.service";
import {StockResponseModalModal} from "../../../modal/StockResponseModal.modal";

@Component({
  selector: 'deepak-kitchen-order',
  templateUrl: './kitchen-order.component.html',
  styleUrls: ['./kitchen-order.component.scss']
})
export class KitchenOrderComponent implements OnInit {
  foodOrderForm: FormGroup = new FormGroup({})
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
    this.buildForm();
  }

  buildForm() {
    this.foodOrderForm = this.formBuilder.group({
      tableNumber: [undefined],
      orderName: [undefined],
      orderType: [undefined],
      quantity: [undefined],
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.foodOrderForm.controls;
  }


  orderYourFood() {
    this.submitted = true;
    console.log("user details: ", this.foodOrderForm.value);
    if (this.foodOrderForm.invalid) {
      return;
    }
    this.sharedService.orderFood(this.foodOrderForm.value as StockResponseModalModal).subscribe({
      next: (value: any) => {
        this.foodOrderForm.reset();
        this.location.back();
        console.log("order successfully !");
        console.log("value", value);
        this.router.navigate(['/feature-modules/order-list'])
      }, error: (err: any) => {
        console.log("unable to save user !");
        this.router.navigate(['/feature-modules/order-list']);
      }
    });
  }

}

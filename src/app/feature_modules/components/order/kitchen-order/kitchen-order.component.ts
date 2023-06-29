import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deepak-kitchen-order',
  templateUrl: './kitchen-order.component.html',
  styleUrls: ['./kitchen-order.component.scss']
})
export class KitchenOrderComponent implements OnInit {
  orderList=[
    {
      tableNumber:"1231",
      orderItems:"Chicken Momo",
      quantity:1,
      category:"momo",
      orderAt:'1:00'
    }
  ]
  ngOnInit() {
  }
}

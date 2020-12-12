import {Component, Input, OnInit} from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {Order} from "../shared/Order";
import {BucketBook} from "../shared/BucketBook";

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css'],
  providers:[OrdersService]
})
export class OrderingComponent implements OnInit {
  order: Order;
  createOrder(){
    this.orderService.createOrder(this.order);
  }
  constructor(private  orderService: OrdersService) { }

  ngOnInit() {
  }

}

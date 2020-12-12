import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {Order} from "../shared/Order";
import {OrdersBooks} from "../shared/OrdersBooks";

@Component({
  selector: 'app-order-showing',
  templateUrl: './order-showing.component.html',
  styleUrls: ['./order-showing.component.css'],
  providers: [OrdersService]
})
export class OrderShowingComponent implements OnInit {
  orders: Order[];
  ordersbooks: OrdersBooks[];
  loadOrders(){
    this.orderService.getOrders()
      .subscribe((data:Order[])=>this.orders = data);
    this.orderService.getOrdersBooks()
      .subscribe((data:OrdersBooks[])=>this.ordersbooks = data);
  }
  delete(order: Order){
    this.orderService.deleteOrder(order.orderID).subscribe(data => this.loadOrders());
  }
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.loadOrders();
  }

}

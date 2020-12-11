import { Component } from '@angular/core';
import {Book} from "../shared/Book";
import {CarriageService} from "../services/carriage.service";
import {User} from "../shared/User";
import {OrdersService} from "../services/orders.service";
import {Order} from "../shared/Order";
import {OrdersBooks} from "../shared/OrdersBooks";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [CarriageService,OrdersService]
})
export class HomeComponent {
  users: User[];
  orders: Order[];
  ordersbooks: OrdersBooks[];
  loadUsers() {
    this.carriageService.getUsers()
      .subscribe((data: User[]) => this.users = data);
  }
  loadOrders(){
    this.ordersService.getOrders()
      .subscribe((data: Order[])=>this.orders = data)
    // console.log(this.orders[0].ordersBooks[0]);
    this.ordersService.getOrdersBooks()
      .subscribe((data: OrdersBooks[])=>this.ordersbooks= data)
    console.log(this.ordersbooks);
    // for(let i = 0; i<10; i++){
    //   for(let j = 0; j<10; j++){
    //     if(this.orders[i].orderId == this.ordersbooks[j]){
    //       this.orders[i].ordersBooks.push(this.ordersbooks[j]);
    //     }
    //   }
    // }
  }
  constructor(private carriageService: CarriageService, private ordersService: OrdersService) {
    this.loadUsers();
    this.loadOrders();
  }
}

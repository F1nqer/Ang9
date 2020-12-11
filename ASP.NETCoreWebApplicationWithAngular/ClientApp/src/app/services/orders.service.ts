import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../shared/Book";
import {Order} from "../shared/Order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = "/api/orders";
  private urlhelp = "/api/ordersbooks";

  constructor(private http: HttpClient) {
  }
  getOrders() {
    return this.http.get(this.url);
  }
  getOrdersBooks(){
    return this.http.get(this.urlhelp);
  }
  getOrder(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  createOrder(order: Order) {
    return this.http.post(this.url, order);
  }
  updateOrder(order: Order) {
    return this.http.put(this.url, order);
  }
  deleteOrder(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

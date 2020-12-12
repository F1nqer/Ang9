import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../shared/Book";
import {Order} from "../shared/Order";
import {OrdersBooks} from "../shared/OrdersBooks";
import {BucketBook} from "../shared/BucketBook";

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
  createOrdersBooks(or: Order, bb: BucketBook){
    let b = new Book()
    b.bookID = bb.bucketBookId;
    b.price = bb.price;
    b.userId = bb.userId;
    b.user = bb.user;
    b.author = bb.author;
    b.description = bb.description;
    b.count = bb.count;
    b.name = bb.name;
    let ob = new OrdersBooks()
    ob.book = b;
    ob.orderID = or.orderID;
    ob.bookId = b.bookID;
    ob.order = or;
    return this.http.post(this.urlhelp, ob);
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

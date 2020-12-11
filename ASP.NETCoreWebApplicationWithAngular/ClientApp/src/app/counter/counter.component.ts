import { Component } from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {CarriageService} from "../services/carriage.service";
import {Book} from "../shared/Book";
import {bucket} from "../shared/Bucket";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  providers: [OrdersService, CarriageService]
})
export class CounterComponent {
  books: Book[];

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.http.get('assets/user.json')
      .subscribe((data:Book[])=>this.books=data);
  }
}

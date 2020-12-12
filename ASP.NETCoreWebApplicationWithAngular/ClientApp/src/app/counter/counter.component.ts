import { Component } from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {CarriageService} from "../services/carriage.service";
import {Book} from "../shared/Book";
import {bucket} from "../shared/Bucket";
import {HttpClient} from "@angular/common/http";
import {BucketService} from "../services/books.service";
import {BucketBook} from "../shared/BucketBook";

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  providers: [BucketService]
})
export class CounterComponent {
  books: BucketBook[];
  loadBucket(){
    this.bucketService.getProducts()
      .subscribe((data:BucketBook[])=>this.books = data);
  }
  constructor(private bucketService: BucketService) {
  }
  ngOnInit(){
    this.loadBucket()
  }
}

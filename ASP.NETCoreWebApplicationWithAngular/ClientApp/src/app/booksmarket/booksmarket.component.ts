import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/Book";
import {CarriageService} from "../services/carriage.service";
import {bucket} from "../shared/Bucket";
import {HttpClient} from "@angular/common/http";
import {BucketService} from "../services/books.service";
import {BucketBook} from "../shared/BucketBook";
@Component({
  selector: 'app-booksmarket',
  templateUrl: './booksmarket.component.html',
  styleUrls: ['./booksmarket.component.css'],
  providers: [CarriageService]
})
export class BooksmarketComponent implements OnInit {
  books: Book[];
  bucketbooks: BucketBook[];

  bucket(book:Book){
    this.bucketService.createProduct(book).subscribe((data:BucketBook)=>this.bucketbooks.push(data))
  }
  loadBooks(){
    this.carriageService.getProducts()
      .subscribe((data:Book[])=>this.books=data)
  }
  constructor(private bucketService: BucketService, private carriageService: CarriageService) {
  }
  ngOnInit(){
      this.loadBooks();
  }

}

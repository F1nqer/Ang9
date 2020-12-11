import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/Book";
import {CarriageService} from "../services/carriage.service";
import {bucket} from "../shared/Bucket";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-booksmarket',
  templateUrl: './booksmarket.component.html',
  styleUrls: ['./booksmarket.component.css'],
  providers: [CarriageService]
})
export class BooksmarketComponent implements OnInit {
  books: Book[];
  bucketbooks: Book[];
  loadBooks(){
    this.carriageService.getProducts()
      .subscribe((data:Book[])=>this.books = data);
  }
  bucket(book: Book){
    this.http.post('assets/user.json', book);
  }


  constructor(private carriageService: CarriageService, private http: HttpClient) { }

  ngOnInit() {
    this.loadBooks();
  }

}

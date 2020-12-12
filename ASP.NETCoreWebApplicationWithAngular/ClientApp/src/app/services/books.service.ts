import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../shared/Book";
import {BucketBook} from "../shared/BucketBook";

@Injectable()
export class BucketService {
  private url = "/api/bucket";
  private bookurl = "/api/books"
  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(vagon: Book) {
    let book = new BucketBook();
    book.name = vagon.name;
    book.count = vagon.count-1;
    book.price = vagon.price;
    book.description = vagon.description;
    book.author = vagon.author;
    book.user = vagon.user;
    book.bucketBookId = vagon.bookID;
    book.userId = vagon.userId;
    vagon.count = vagon.count -1;
    this.http.put(this.bookurl, vagon);
    return this.http.post(this.url, book);
  }
  updateProduct(vagon: BucketBook) {
    return this.http.put(this.url, vagon);
  }
  deleteProduct(vagon: BucketBook) {
    let book = new Book();
    book.name = vagon.name;
    book.count = vagon.count+1;
    book.price = vagon.price;
    book.description = vagon.description;
    book.author = vagon.author;
    book.user = vagon.user;
    book.bookID = vagon.bucketBookId;
    book.userId = vagon.userId;
    this.http.put(this.bookurl, book);
    return this.http.delete(this.url + '/' + vagon.bucketBookId);
  }
}

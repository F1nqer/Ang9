import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../shared/Book";

@Injectable()
export class CarriageService {
  private url = "/api/books";
  private userurl = "/api/users";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }
  getUsers() {
    return this.http.get(this.userurl);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(vagon: Book) {
    return this.http.post(this.url, vagon);
  }
  updateProduct(vagon: Book) {
    return this.http.put(this.url, vagon);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

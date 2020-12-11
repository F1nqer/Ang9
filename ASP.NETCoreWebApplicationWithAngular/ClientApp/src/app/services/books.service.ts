// import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {Book} from "../shared/Book";
//
// @Injectable()
// export class BucketService {
//   private url = "/api/bucket";
//   constructor(private http: HttpClient) {
//   }
//
//   getProducts() {
//     return this.http.get(this.url);
//   }
//
//   getProduct(id: number) {
//     return this.http.get(this.url + '/' + id);
//   }
//
//   createProduct(vagon: Book) {
//     return this.http.post(this.url, vagon);
//   }
//   updateProduct(vagon: Book) {
//     return this.http.put(this.url, vagon);
//   }
//   deleteProduct(id: number) {
//     return this.http.delete(this.url + '/' + id);
//   }
// }

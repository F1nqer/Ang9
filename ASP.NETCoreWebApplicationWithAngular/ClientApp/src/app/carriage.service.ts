import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vagon} from "./Vagon";

@Injectable({
  providedIn: 'root'
})
export class CarriageService {
  private url = "/api/vagons";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(vagon: Vagon) {
    return this.http.post(this.url, vagon);
  }
  updateProduct(vagon: Vagon) {

    return this.http.put(this.url, vagon);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

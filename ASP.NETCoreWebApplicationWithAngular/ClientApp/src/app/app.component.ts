import { Component } from '@angular/core';
import {Vagon} from "./Vagon";
import {CarriageService} from "./carriage.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  vagon: Vagon = new Vagon();   // изменяемый товар
  vagons: Vagon[];                // массив товаров
  tableMode: boolean = true;          // табличный режим

  constructor(private carriageService: CarriageService) { }

  ngOnInit() {
    this.loadProducts();    // загрузка данных при старте компонента
  }
  // получаем данные через сервис
  loadProducts() {
    this.carriageService.getProducts()
      .subscribe((data: Vagon[]) => this.vagons = data);
  }
  // сохранение данных
  save() {
    if (this.vagon.id == null) {
      this.carriageService.createProduct(this.vagon)
        .subscribe((data: Vagon) => this.vagons.push(data));
    } else {
      this.carriageService.updateProduct(this.vagon)
        .subscribe(data => this.loadProducts());
    }
    this.cancel();
  }
  editProduct(v: Vagon) {
    this.vagon = v;
  }
  cancel() {
    this.vagon = new Vagon();
    this.tableMode = true;
  }
  delete(p: Vagon) {
    this.carriageService.deleteProduct(p.id)
      .subscribe(data => this.loadProducts());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}

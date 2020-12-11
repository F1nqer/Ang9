import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/Book";
import {CarriageService} from "../services/carriage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarriageValidatorService} from "../services/carriage-validator.service";

@Component({
  selector: 'app-vagon-form',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css'],
  providers: [CarriageService]
})
export class VagonFormComponent implements OnInit {
  book: Book = new Book();
  editCheck: boolean = true;
  actionVagon: Book;
  manufacturer: string;
  num: string;
  statement: string;
  type: string;
  vagons: Book[];
  sum: number;
  checksum: number;
  check = 0;
  tgdk: number;
  statements = ['Good', 'Broken', 'In repairing', 'Can use'];
  myForm: FormGroup;
  VagonEditForm: FormGroup;
  editVagonShow: Book;
  editVagon: FormControl;
  addVagon: FormControl;
  tableMode: boolean = true; // табличный режим

  constructor(private carriageService: CarriageService, private carriAgeValidatorService: CarriageValidatorService) {

  }

  ngOnInit() {
    this.loadProducts();
    // this.addVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator());
    // this.editVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator());

  }

  loadProducts() {
    this.carriageService.getProducts()
      .subscribe((data: Book[]) => this.vagons = data);
  }
  // сохранение данных
  save() {
    if (this.book.bookID == null) {
      this.carriageService.createProduct(this.book)
        .subscribe((data: Book) => this.vagons.push(data));
    } else {
      this.carriageService.updateProduct(this.book)
        .subscribe(data => this.loadProducts());
    }
    this.cancel();
  }
  editProduct(p: Book) {
    this.editCheck= false;
    this.book = p;
  }
  cancel() {
    this.book = new Book();
    this.tableMode = true;
  }
  delete(p: Book) {
    this.carriageService.deleteProduct(p.bookID)
      .subscribe(data => this.loadProducts());
  }
  add() {
    this.cancel();
    this.editCheck = true;
    this.tableMode = false;
  }
}

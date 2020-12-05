import { Component, OnInit } from '@angular/core';
import {Vagon} from "../Vagon";
import {CarriageService} from "../carriage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarriageValidatorService} from "../carriage-validator.service";

@Component({
  selector: 'app-vagon-form',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css'],
  providers: [CarriageService]
})
export class VagonFormComponent implements OnInit {
  vagon: Vagon = new Vagon();
  actionVagon: Vagon;
  manufacturer: string;
  num: string;
  statement: string;
  type: string;
  vagons: Vagon[];
  sum: number;
  checksum: number;
  check = 0;
  tgdk: number;
  statements = ['Good', 'Broken', 'In repairing', 'Can use'];
  myForm: FormGroup;
  VagonEditForm: FormGroup;
  editVagonShow: Vagon;
  editVagon: FormControl;
  addVagon: FormControl;
  tableMode: boolean = true; // табличный режим

  constructor(private carriageService: CarriageService, private carriAgeValidatorService: CarriageValidatorService) {

  }

  ngOnInit() {
    this.loadProducts();
    this.addVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator());
    this.editVagon = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)], this.carriAgeValidatorService.VagonNumValidator());

  }

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
  editProduct(p: Vagon) {
    this.vagon = p;
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

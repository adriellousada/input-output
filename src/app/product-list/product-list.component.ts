import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [
    {id: 1, desc: 'caneta'},
    {id: 2, desc: 'caderno'},
    {id: 3, desc: 'revista'},
    {id: 4, desc: 'livro'},
  ];

  @Output() productAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addProduct(product) {
    this.productAdded.emit({product: product});
  }

}
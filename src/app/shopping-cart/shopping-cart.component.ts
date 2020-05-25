import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: any = [];

  @Input() product: any;

  public onAddProduct(evento) {
    console.log("Valor obtido no componente pai: " + evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
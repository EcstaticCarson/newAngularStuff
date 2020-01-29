import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }
  addToCart(p: Iproduct) {
    this.dService.addToCart(p);
  }

}

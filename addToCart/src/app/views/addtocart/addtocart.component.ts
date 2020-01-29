import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  cartItems: Iproduct[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getCartItems();
  }

  removeCartItems() {
    // Call service to remove items from cart
    this.dService.emptyCart();
  }
  removeItem(item: Iproduct) {
    // Going to pass id to service to remove from array
    this.dService.removeItemFromCart(item);

  }
  emptyCart() {
    this.dService.emptyCart();
  }
}

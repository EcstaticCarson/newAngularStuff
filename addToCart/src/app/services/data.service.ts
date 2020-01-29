import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Iproduct[] = [];
  products: Iproduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: '2',
      pName: 'The Master Sowrd',
      pNameURL: 'Zelda',
      pDesc: 'A Powerful Sword Indeed!',
      additionalInfo: 'Used to Kill Ganon',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: '3',
      pName: 'N64',
      pNameURL: 'Nintendo',
      pDesc: 'Money is a requirement',
      additionalInfo: 'THE one and only game for the 90s.',
      price: 'View in Cart',
      qty: 0
    }
  ];

  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  addToCart(cartItem: Iproduct) {
    if (!this.itemsInCart.includes(cartItem)) {
      cartItem.qty++;
      this.itemsInCart.push(cartItem);
      console.log(this.itemsInCart);
    } else {
      // We are going to search for the item in your cart
      // Then ad one to quantity.
    }
  }

  getCartItems(): Iproduct[] {
    return this.itemsInCart;
  }

  emptyCart() {
    this.itemsInCart.length = 0;
  }
  removeItemFromCart(itemToRemove: Iproduct): void {
    // We are going to search for product and remove it from itemsInCart
    // Find the indext location of product
    const index = this.findIteminCart(itemToRemove);
    // Perform a splice
    this.itemsInCart[index].qty = 0;
    this.itemsInCart.splice(index, 1);

  }
  findIteminCart(id: Iproduct): number {
    // We are going to find the id in our cart
    return this.itemsInCart.indexOf(id);
  }
}

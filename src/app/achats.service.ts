import { Injectable } from '@angular/core';
import { Produits } from './models/produits';

@Injectable({
  providedIn: 'root',
})
export class AchatsService {
  items: Produits[] = [];
  constructor() {}
  addToCart(produits: Produits) {
    this.items.push(produits);
  }
  getItems() {
    return this.items;
  }
  clearcart() {
    this.items = [];
    return this.items;
  }
}

import { Component, OnInit } from '@angular/core';
import { AchatsService } from '@app/achats.service';
import { Produits } from '@app/models/produits';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.scss'],
})
export class DetailsProduitsComponent implements OnInit {
  constructor(private achatsService: AchatsService) {}

  ngOnInit(): void {}
  addToCart(produits: Produits) {
    this.achatsService.addToCart(produits);
    window.alert('Your product has been added to the cart!');
  }
}

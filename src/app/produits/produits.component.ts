import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { AchatsService } from '@app/achats.service';
import { Produits } from '@app/models/produits';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produit: Produits | undefined;
  prodId;
  prodnom;
  public produits: any;
  parentSelector: boolean = false;
  items: any[] = [];
  readonly ROOT_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient, private route: ActivatedRoute, private achatsService:AchatsService) {}

  ngOnInit(): void {
    this.produits = this.http.get(this.ROOT_URL + '/Produits');

     const routeParams = this.route.snapshot.paramMap;
     const prodnom = routeParams.get('prodnom');
    //this.produit = this.produits.find(produit => produit.nom === prodnom);
  }

  onCheck(event: any, prod: any, id) {
    //var btn = document.getElementById('bt');
    //var isChecked = event.target.checked;
    console.log(event, prod);
    if (prod.select) {
      $('.btn').show();
      this.items.push(prod);
      console.log(this.items);
    } else {
      let index = this.items.findIndex((e) => e.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
    if (this.items.length == 0) {
      $('.btn').hide();
    }
  }
  // this.selected.pull(prod);
  //}
  // console.log(this.selected)

  //this.selected.map((elt)=>{
  // console.log(elt)
  // })

  // console.log( $('input:checkbox').filter(":checked").length);

  /*if( $('input:checkbox').filter(":checked").length==0){
    $('.btn').hide();
    console.log(this.produits);
    //isChecked=false;
    return false;
  }else{
    this.produits= this.produits.map(x=>x.id);
   $('.btn').show();
  
   return true;
  }
 }*/
  //confirm(){
  //alert('confirmer achat');
  //}
  addToCart(produits:Produits){
    this.achatsService.addToCart(produits);
   this.http.post(this.ROOT_URL + '/AddProduitsPanier/:prodId', this.items).subscribe((data) => {
      console.log(data);
    });
  alert('achat effectué');
  }
}

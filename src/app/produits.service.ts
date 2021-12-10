import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  readonly ROOT_URL = 'http://127.0.0.1:8000';
  selected: any[] = [];
  prods = this.selected;
  constructor(private http: HttpClient) {}
  post(): Observable<any> {
    return this.http.post(this.ROOT_URL + '/AddProduitsPanier/2', this.selected);
  }
}

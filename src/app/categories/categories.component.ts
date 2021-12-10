import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  readonly ROOT_URL = 'http://127.0.0.1:8000';
  public categories: any;
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.categories=this.http.get(this.ROOT_URL + '/Categorie');
  }
}

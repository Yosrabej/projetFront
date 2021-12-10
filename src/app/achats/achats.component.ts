import { Component, OnInit } from '@angular/core';
import { AchatsService } from '@app/achats.service';
@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.scss'],
})
export class AchatsComponent implements OnInit {
  items: any[] = [];
  constructor(private achatsService:AchatsService) {}

  ngOnInit(): void {
    this.items =this.achatsService.getItems();
  console.log(this.items)}
  
}

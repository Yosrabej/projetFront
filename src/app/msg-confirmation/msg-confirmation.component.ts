import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '@app/models/produits';

@Component({
  selector: 'app-msg-confirmation',
  templateUrl: './msg-confirmation.component.html',
  styleUrls: ['./msg-confirmation.component.scss'],
})
export class MsgConfirmationComponent implements OnInit {
  @Input() produits!: Produits;
  constructor() {}

  ngOnInit(): void {}
}

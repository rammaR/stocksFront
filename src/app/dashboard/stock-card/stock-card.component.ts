import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string{
    const localeVariation = this.stock.variation.toLocaleString().replace('-', '');
    const prefix = (this.stock.price < 0) ? '-' : '+';
    return `${prefix}${localeVariation}%`;
  }

}

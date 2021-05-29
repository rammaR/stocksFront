import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[];

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  async getStocks(): Promise<void> {
    this.stocks = await this.service.getStocks();
    console.log(this.stocks);

  }

}

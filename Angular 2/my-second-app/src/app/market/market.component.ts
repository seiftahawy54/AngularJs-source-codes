import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';
// 5/7
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {

  collectables = [];

  onAddToCollection(item: Collectable): any {
    this.collectableService.addToCollection(item);
  }

  constructor(private collectableService: CollectableService) {}

  ngOnInit(): void {
    this.collectables = this.collectableService.getCollectables();
  }

}

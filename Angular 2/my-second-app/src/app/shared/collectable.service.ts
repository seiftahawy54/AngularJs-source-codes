import { Collectable } from './collectable.model';

export class CollectableService {
  private collectables: Collectable[] = [
    { description: 'C++ how to program', type: 'Book' },
    { description: 'The brothers khorashov', type: 'Novel' },
    { description: 'GTA V', type: 'Video game' },
    { description: 'RTX 2080 SUPER', type: 'GPU' }
  ];

  private collection: Collectable[] = [];

  getCollectables(): any {
    return this.collectables;
  }

  getCollection(): any {
    return this.collection;
  }

  addToCollection(item: Collectable): any {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable): any {
    this.collection.splice(this.collection.indexOf(item), 1);
  }

}

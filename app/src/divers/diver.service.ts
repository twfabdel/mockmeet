import { Injectable } from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

@Injectable()
export class DiverService {
  divers = [];

  getDivers() {

    this.divers.push(new Diver(
      "Diver1", "M", [
        new Dive('103', 'B', 1),
        new Dive('203', 'B', 1),
        new Dive('303', 'B', 1),
        new Dive('403', 'B', 1),
        new Dive('5132', 'D', 1),
        new Dive('5134', 'D', 1)
      ]
    ));
    this.divers.push(new Diver(
      "Diver2", "F", [
        new Dive('103', 'B', 1),
        new Dive('203', 'B', 1),
        new Dive('303', 'B', 1),
        new Dive('403', 'B', 1),
        new Dive('105', 'B', 1)
      ]
    ));

    return this.divers;
  }

  addDiver(diver: Diver) {    
    this.divers.unshift(diver);
  }
}

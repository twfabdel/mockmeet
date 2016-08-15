import { Injectable } from '@angular/core';

import { Diver } from '../diver/diver';

@Injectable()
export class DiverService {
  divers = [];

  getDivers() {
    return this.divers;
  }

  addDiver(diver: Diver) {
    
    this.divers.unshift(diver);
  }
}

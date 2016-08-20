import { Injectable} from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

@Injectable()
export class DiverService {
  private divers = [];

  getDivers() {
    return this.divers;
  }

  addDiver(diver: Diver) {    
    this.divers.unshift(diver);
  }

  deleteDiver(diver: Diver) {
    var i = this.divers.indexOf(diver);
    this.divers.splice(i, 1);
  }
}

import { Injectable} from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

@Injectable()
export class ScoresService {
  divers = [];

  setDivers(divers: Diver[]) {
    this.divers = divers;
  }

  getDivers() {
    return this.divers;
  }

}

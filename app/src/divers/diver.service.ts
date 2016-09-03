import { Injectable} from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

@Injectable()
export class DiverService {
  private divers = [];

  getDivers() {
    return this.divers;  
  }

  //For testing styles
  mockDivers() {
    this.divers.push(new Diver(
      "Diver1",
      "M",
      [new Dive(101, "B", 1, 1),
      new Dive(101, "B", 1, 2),
      new Dive(101, "B", 1, 3),
      new Dive(101, "B", 1, 1.1),
      new Dive(101, "B", 1, 1.2),
      new Dive(101, "B", 1, 1.3)
      ]
    ));

  }

  addDiver(diver: Diver) {
    if(diver.sex == 'M') {   
      this.divers.unshift(diver);
    } else this.divers.push(diver);
  }

  deleteDiver(diver: Diver) {
    var i = this.divers.indexOf(diver);
    this.divers.splice(i, 1);
  }

  restartMeet() {
    for(let diver of this.divers) {
      diver.total = 0;
      for(let dive of diver.list) {
        dive.scoreList = [];
        dive.countedScores = ['-','-','-'];
        dive.total = '';
      }
    }
  }
}

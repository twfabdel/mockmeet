import { Component } from '@angular/core';
import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';

@Component({
  selector: 'new-diver',
  templateUrl: './app/src/new-diver/new-diver.html',
  styleUrls: ['./app/src/new-diver/new-diver.css']
})

export class NewDiverComponent {
  public divers = [];

  constructor(private diverService: DiverService) { }

  newDiver() {
    var dives = [];
    dives.push(new Dive(this.dive0, this.pos0, this.level0));
    dives.push(new Dive(this.dive1, this.pos1, this.level1));
    dives.push(new Dive(this.dive2, this.pos2, this.level2));
    dives.push(new Dive(this.dive3, this.pos3, this.level3));
    dives.push(new Dive(this.dive4, this.pos4, this.level4));
    
    if(this.sex=="M") {
      dives.push(new Dive(this.dive5, this.pos5, this.level5));
    }

    this.divers.push(new Diver(this.diverName, this.sex, dives));

    this.diverService.addDiver(new Diver(this.diverName, this.sex, dives));

    this.resetForm();
  }

  resetForm() {
    this.diverName='';
    
    //TODO: consolidate into loop?
    this.dive0='';
    this.dive1='';
    this.dive2='';
    this.dive3='';
    this.dive4='';
    this.dive5='';

    this.pos0='A';
    this.pos1='A';
    this.pos2='A';
    this.pos3='A';
    this.pos4='A';
    this.pos5='A';
  }
}

import { Component, OnInit } from '@angular/core';
import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';

@Component({
  selector: 'divers',
  templateUrl: './app/src/divers/divers.html', 
  styleUrls: ['./app/src/divers/divers.css']
})

export class DiversComponent implements OnInit {
  divers: Diver[];

  constructor(private diverService: DiverService) { }

  ngOnInit() {
    this.divers = this.diverService.getDivers();

    this.divers.push(new Diver(
      "Diver1", "M", [
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1)
      ]
    ));
    this.divers.push(new Diver(
      "Diver2", "F", [
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1),
        new Dive('103', 'B', 1)
      ]
    ));
  }

  deleteDiver(diver: Diver) {
    var i = this.divers.indexOf(diver);
    this.divers.splice(i, 1);
  }
}
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
  }

  deleteDiver(diver: Diver) {
    var i = this.divers.indexOf(diver);
    this.divers.splice(i, 1);
  }
}
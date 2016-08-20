import { Component, OnInit, DoCheck } from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';
import { DiverSortPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'standings',
  templateUrl: './app/src/standings/standings.html',
  styleUrls: ['./app/src/standings/standings.css'],
  pipes: [ DiverSortPipe ]
})

export class StandingsComponent implements OnInit, DoCheck{ 
  divers: Diver[];

  constructor(private diverService: DiverService) { }

  ngOnInit() {
    this.divers = this.diverService.getDivers();
  }

  ngDoCheck() {
    if(this.diverService.getChange()) {
      this.diverService.toggleChange();
    }
  }

}
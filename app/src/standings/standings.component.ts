import { Component, OnInit } from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';
import { ScoresService } from './scores.service';

@Component({
  selector: 'standings',
  templateUrl: './app/src/standings/standings.html',
  styles: [`
    h1 {
      padding-top:20px;
    }
  `]
})

export class StandingsComponent implements OnInit{ 
  divers: Diver[];

  constructor(private diverService: DiverService,
              private scoresService: ScoresService) { }

  ngOnInit() {
    this.divers = this.scoresService.getDivers();
  }

}
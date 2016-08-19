import { Component, OnInit } from '@angular/core';
import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';

@Component({
  selector: 'dive-scoring',
  templateUrl: './app/src/dive-scoring/dive-scoring.html',
  styleUrls: ['./app/src/dive-scoring/dive-scoring.css']
})

export class DiveScoringComponent implements OnInit {
  fulls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  halfs = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5];
  scores = [];

  round = 0;
  diverIndex = 0;
  diverUp: Diver;
  dive: Dive;

  divers: Diver[];

  running = true;

  constructor(private diverService: DiverService) { }

  ngOnInit() {
    this.divers = this.diverService.getDivers();
    this.setDiver();
  }

  private addScore(score: number) {
    this.scores.push(score);
  }

  private submit() {
    this.diverIndex += 1;

    if(this.diverIndex == this.divers.length) {
      this.round += 1;
      this.diverIndex = 0;
    }

    this.setDiver();
  }

  private setDiver() {
    this.diverUp = this.divers[this.diverIndex];
    this.dive = this.diverUp.list[this.round];
  }
}
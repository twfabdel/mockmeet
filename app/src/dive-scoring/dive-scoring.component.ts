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

  submitted = false;

  constructor(private diverService: DiverService) { }

  ngOnInit() {
    this.divers = this.diverService.getDivers();

    this.divers.push(new Diver(
      "Diver1", "M", [
        new Dive('103', 'B', 1),
        new Dive('203', 'B', 1),
        new Dive('303', 'B', 1),
        new Dive('403', 'B', 1),
        new Dive('5132', 'D', 1),
        new Dive('5134', 'D', 1)
      ]
    ));
    this.divers.push(new Diver(
      "Diver2", "M", [
        new Dive('103', 'B', 1),
        new Dive('203', 'B', 1),
        new Dive('303', 'B', 1),
        new Dive('403', 'B', 1),
        new Dive('5132', 'D', 1),
        new Dive('5134', 'D', 1)
      ]
    ));

    this.setDiver();
  }

  private addScore(score: number) {
    if(this.submitted) {
      this.submitted = false;
      this.scores = [];
    }
    this.scores.push(score);
  }

  private submit() {
    this.submitted = true;

    if(this.scores.length % 2 == 0) {
      alert("Please enter an odd number of scores");
      return;
    }

    this.dive.giveScore(this.scores);

    this.diverIndex += 1;

    if(this.diverIndex == this.divers.length) {
      this.round += 1;
      this.diverIndex = 0;
    }
  }

  private next() {
    this.scores = [];
    this.diverUp.addScore(this.dive.total);
    this.setDiver();
  }

  private setDiver() {
    this.diverUp = this.divers[this.diverIndex];
    this.dive = this.diverUp.list[this.round];
  }
}
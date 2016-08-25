import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';

import { ToFloatPipe } from '../pipes/toFloat.pipe';

@Component({
  selector: 'dive-scoring',
  templateUrl: './app/src/dive-scoring/dive-scoring.html',
  styleUrls: ['./app/src/dive-scoring/dive-scoring.css'],
  pipes: [ ToFloatPipe ]
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
  running = true;

  constructor(private diverService: DiverService,
              private router: Router) { }

  ngOnInit() {
    this.divers = this.diverService.getDivers();

    if(this.divers.length == 0) {
      alert("Please enter one or more divers into this meet.");
      this.router.navigate(['/home']);
    }
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
      alert("Please enter an odd number of scores.");
      return;
    }

    this.dive.giveScore(this.scores);
  }

  private next() {
    if(!this.submitted) {
      alert("Please enter scores or submit the score entered.");
      return;
    }

    this.diverIndex += 1;

    if(this.diverIndex == this.divers.length) {
      this.round += 1;
      this.diverIndex = 0;
    }

    this.scores = [];
    this.diverUp.addScore(this.dive.total);
    this.setDiver();
    this.submitted = false;
  }

  private setDiver() {
    this.diverUp = this.divers[this.diverIndex];
    var temp = this.diverUp.list[this.round];
    if(!temp) {
      this.running = false;
      return;
    }
    this.dive = temp;
  }
}
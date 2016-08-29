import { Component, OnInit } from '@angular/core';

import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';
import { DiverSortPipe } from '../pipes/sort.pipe';

import { ToFloatPipe } from '../pipes/toFloat.pipe';

@Component({
  selector: 'standings',
  templateUrl: './app/src/standings/standings.html',
  styleUrls: ['./app/src/standings/standings.css'],
  pipes: [ DiverSortPipe, ToFloatPipe ]
})

export class StandingsComponent implements OnInit{ 
  divers: Diver[];

  constructor(private diverService: DiverService) { }

  ngOnInit() {
    this.divers = this.diverService.getDivers().slice();
  }

  private scoreToString(score: number) : string {
    if(score == 0 || !score) return "0.00";
    var str = (Math.round(score * 100)).toString();
    return str.slice(0, str.length-2) + "." + str.slice(-2);
  } 

  private showScores(diver: Diver) {
    var index = this.divers.indexOf(diver);
    let scoreElems = document.getElementsByClassName("scores" + index);
    let buttonElem = document.getElementById("btn" + index);

    var flip = false;
    for(var elem of scoreElems) {
      if(elem.style.display != "table-row") {
        elem.style.display = "table-row";
        flip = true;
      } else {
        elem.style.display = "none";
      }
    }

    if(flip) {
      buttonElem.setAttribute("class", "rotate");
    } else buttonElem.setAttribute("class", "");
  }

}
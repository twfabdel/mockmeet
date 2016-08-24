import { Component, OnInit } from '@angular/core';
import { Diver } from '../diver/diver';
import { Dive } from '../dive/dive';

import { DiverService } from '../divers/diver.service';
import { DdService } from '../dd/dd.service';

import { ToFloatPipe } from '../pipes/toFloat.pipe';

@Component({
  selector: 'new-diver',
  templateUrl: './app/src/new-diver/new-diver.html',
  styleUrls: ['./app/src/new-diver/new-diver.css'],
  pipes: [ ToFloatPipe ]
})

export class NewDiverComponent implements OnInit {
  public divers = [];

  constructor(private diverService: DiverService,
              private ddService: DdService) { }

  ngOnInit() {
    this.sex='F';
    this.setPosition();
    this.setLevel();
  }

  newDiver() {
    var dives = [];

    var dds = [];
    var bounds = 5;
    if(this.sex=="M") {
      bounds = 6;
    }

    console.log("before the loop");
    var i = 0;
    while(i < bounds) {
      var ddObj = document.getElementById('dd' + i);
      if(!ddObj) {
        alert("Please enter a valid dive for dive number " + i + ".");
        return;
      }
      var dd = parseFloat(ddObj.innerHTML);
      console.log(dd);
      if(!dd) {
        console.log("gud");
        alert("Please enter a valid dive for dive number " + (i+1) + ".");
        return;
      }
      dds.push(dd);
      i += 1;
    }

    dives.push(new Dive(this.dive0, this.pos0, this.level0, dds[0]));
    dives.push(new Dive(this.dive1, this.pos1, this.level1, dds[1]));
    dives.push(new Dive(this.dive2, this.pos2, this.level2, dds[2]));
    dives.push(new Dive(this.dive3, this.pos3, this.level3, dds[3]));
    dives.push(new Dive(this.dive4, this.pos4, this.level4, dds[4]));
    
    if(this.sex=="M") {
      dives.push(new Dive(this.dive5, this.pos5, this.level5, dds[5]));
    }

    this.diverService.addDiver(new Diver(this.diverName, this.sex, dives));

    this.resetForm();
  }

  private resetForm() {
    this.diverName='';
    
    //TODO: consolidate into loop?
    this.dive0='';
    this.dive1='';
    this.dive2='';
    this.dive3='';
    this.dive4='';
    this.dive5='';

    this.setPosition();
    this.setLevel();
  }

  private setPosition() {
    this.pos0='A';
    this.pos1='A';
    this.pos2='A';
    this.pos3='A';
    this.pos4='A';
    this.pos5='A';
  }

  private setLevel() {
    this.level0='1';
    this.level1='1';
    this.level2='1';
    this.level3='1';
    this.level4='1';
    this.level5='1';
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DiverService } from '../divers/diver.service';

@Component({
  selector: 'home',
  templateUrl: './app/src/home/home.html',
  styleUrls: ['./app/src/home/home.css']
})

export class HomeComponent { 
  title = 'Divers';

  constructor(private diverService: DiverService,
              private router: Router) { }

  startMeet() {
    if(this.diverService.getDivers().length == 0) {
      alert("Please enter one or more divers into this meet.");
    } else {
      this.router.navigate(['/meet']);
    }
  }
  
}
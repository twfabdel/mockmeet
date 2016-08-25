import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DiverService } from '../divers/diver.service';

@Component({
  selector: 'navbar',
  templateUrl: './app/src/navbar/navbar.html',
  styleUrls: ['./app/src/navbar/navbar.css']
})

export class NavbarComponent { 
  title = 'Mock Meet';

  constructor(private router: Router,
              private diverService: DiverService) { }

  newMeet() {
    this.diverService.restartMeet();
    this.router.navigate(['/home']);
  }
}

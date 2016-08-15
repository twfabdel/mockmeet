import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app/src/home/home.html',
  styles: [`
    th {
      font-size:20px;
      padding: 10px;
      text-align: left;
    }

    td {
      vertical-align:top;
    }
  `]
})

export class HomeComponent { 
  title = 'Divers';
}
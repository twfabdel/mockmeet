import { Component } from '@angular/core';

@Component({
  selector: 'meet',
  template: `
    <h1>Meet</h1>
    <dive-scoring></dive-scoring>
  `,
  styles: [`
    h1 {
      text-align:center;
      padding-top:20px;
    }
  `]
})

export class MeetComponent { }

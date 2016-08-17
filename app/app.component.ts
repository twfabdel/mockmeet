import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      text-align:center;
    }
  `]
})

export class AppComponent { }

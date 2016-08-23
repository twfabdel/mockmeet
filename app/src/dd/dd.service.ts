import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

import { DDMAP } from './dd';

@Injectable()
export class DdService {
  private http;

  constructor (private http: Http) { 
    this.http = http;
  }

  getDD() {
    console.log(DDMAP["101"]["1B"]);
  }
}

import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
 
import { DDMAP } from './dd';

@Injectable()
export class DdService {
  private http;

  constructor (private http: Http) { 
    this.http = http;
  }

  getDD(num: string, pos: string, level: string) {
    let dive = DDMAP[num];
    if(dive === undefined) {
      return '';
    } else return dive[level + pos];
  }
}

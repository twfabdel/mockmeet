import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DdService {
  constructor (private http: Http) { }

  private ddUrl = 'dd-sheet.csv';

  getDD() {
    var data;
    this.http.get(this.ddUrl)
      .then(function mySucces(response) {
          data = response.data;
      });
    return data;
  }
}

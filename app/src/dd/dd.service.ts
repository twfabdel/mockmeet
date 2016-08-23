import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

import ddJson from '/dd.json!json';

@Injectable()
export class DdService {
  constructor (private http: Http) { }

  getDD() {
    var data;
    this.http.get(this.ddUrl)
      .then(function mySucces(response) {
          data = response.data;
      });
    return data;
  }
}

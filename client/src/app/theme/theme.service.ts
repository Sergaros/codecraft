import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThemeService {

  constructor(private http: Http) { }

  get() {
      return this.http.get('/api/themes')
      .toPromise();
  }

  add() {
      return this.http.get('/api/themes')
      .toPromise();
  }

  remove() {
      return this.http.get('/api/themes')
      .toPromise();
  }

  update() {
      return this.http.get('/api/themes')
      .toPromise();
  }

}

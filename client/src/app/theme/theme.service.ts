import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThemeService {

  constructor(private http: Http) { }

  getAll() {
      return this.http.get('/api/theme')
      .toPromise();
  }

  get(id: string) {
      return this.http.get(`/api/theme/${id}`)
      .toPromise();
  }

  add(theme: any) {
      return this.http.post('/api/theme', theme)
      .toPromise();
  }

  delete(id: string) {
      return this.http.delete(`/api/theme/${id}`)
      .toPromise();
  }

  update(id: string, data: any) {
      return this.http.put(`/api/theme/${id}`, data)
      .toPromise();
  }

}

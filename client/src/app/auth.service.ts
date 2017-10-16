import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  logIn(name: string, password: string){
      return this.http.post('/login', {name:name, password:password})
      .toPromise();
  }

  isLoggedIn() {
      return this.http.get('/isloggedin')
      .toPromise();
  }

  logOut(){
      return this.http.get('/logout')
      .toPromise();
  }

}

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  public isAuthenticated: boolean = false;

  logIn(name: string, password: string){
      return this.http.post('/login', {username:name, password:password})
      .toPromise()
      .then(result=>{
          this.isAuthenticated = result.json().result;
          return result;
      });
  }

  isLoggedIn() {
      return this.http.get('/isloggedin')
      .toPromise()
      .then(result=>{
          this.isAuthenticated = result.json().result;
          return result;
      });
  }

  logOut(){
      this.isAuthenticated = false;
      return this.http.get('/logout')
      .toPromise();
  }

}

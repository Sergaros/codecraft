import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as moment from 'moment';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  isLogged: Boolean = false;
  showDialog: Boolean = false;

  constructor(private auth: AuthService){
  }

  ngOnInit(){
      console.log('ngOnInit');

      this.auth.isLoggedIn()
      .then(res=>{
          this.isLogged = res.json().result;
      })
      .catch(err=>{
          console.log('Err - ', err);
      })
  }

  logOut(){
      console.log('LogOut');

      this.auth.logOut()
      .then(res=>{
          console.log('log out - ', res.ok);
          this.isLogged = false;
      })
      .catch(err=>{
          console.log('Err - ', err);
      })
  }

  logIn(){
      console.log('LogIn');

      this.auth.logIn('Sergaros', '19880525fjty')
      .then(res=>{
          console.log('log in - ', res.ok);
          this.isLogged = true;
      })
      .catch(err=>{
          console.log('Err - ', err);
      })
  }

  ngAfterViewInit(){
      console.log('ngAfterViewInit');
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as moment from 'moment';
import { AuthService } from './auth.service';


import { LoginComponent } from './login/login.component';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  isLogged: Boolean = false;

  bsModalRef: BsModalRef;

  constructor(private auth: AuthService, private modalService: BsModalService){
  }

  ngOnInit(){
      this.auth.isLoggedIn()
      .then(res=>{
          this.isLogged = res.json().result;
      })
      .catch(err=>{
          console.log('Err - ', err);
      })
  }

  logOut(){
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
      this.bsModalRef = this.modalService.show(LoginComponent, {class: 'modal-dialog modal-sm'});
      console.log('this.bsModalRef - ', this.bsModalRef)
      this.bsModalRef.content.title = 'Log in';
  }

  ngAfterViewInit(){
      console.log('ngAfterViewInit');
  }

}

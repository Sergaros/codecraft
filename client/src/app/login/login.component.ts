import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../auth.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  login: FormControl;
  password: FormControl;
  recaptcha: string;

  incorrect: boolean = false;

  public onClose: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef, private auth: AuthService) { }

  ngOnInit() {
      this.onClose = new Subject();
      this.createFormControls();
      this.createForm();
  }

  onSubmit() {
    this.auth.logIn(this.login.value, this.password.value, this.recaptcha)
    .then(result=>{
        console.log('result - ', result);

        this.onClose.next(true);
        this.bsModalRef.hide();
    })
    .catch(err=>{
        console.log('Error: ', err);
        this.onClose.next(false);
        this.incorrect = true;
    });

  }

  createFormControls() {
   this.login = new FormControl('', Validators.required);
   this.password = new FormControl('', [
     Validators.required,
     Validators.minLength(8)
   ]);
 }

 createForm() {
   this.authForm = new FormGroup({
     login: this.login,
     password: this.password
   });
 }

 resolved(result){
     /*this.auth.recaptcha(result)
     .then(result=>{
         console.log('recaptcha - ', result);
     })*/
     this.recaptcha = result;
 }

}

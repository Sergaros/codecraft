import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
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

  constructor(private bsModalRef: BsModalRef, private auth: AuthService) { }

  ngOnInit() {
      this.createFormControls();
      this.createForm();
  }

  onSubmit() {
    this.bsModalRef.hide();
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

}

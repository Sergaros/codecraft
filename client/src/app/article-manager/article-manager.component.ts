import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-article-manager',
  templateUrl: './article-manager.component.html',
  styleUrls: ['./article-manager.component.css']
})
export class ArticleManagerComponent implements OnInit {

    articleForm: FormGroup;
    name: FormControl;
    body: FormControl;

    public onClose: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) {

  }

  ngOnInit() {
      console.log('ngOnInit');
      this.onClose = new Subject();
      this.createFormControls();
      this.createForm();

      setTimeout(() => { //get params
              if(this.bsModalRef.content._id){
                  /*this.themeService.get(this.bsModalRef.content._id)
                  .then(result=>{
                      //console.log('Edit theme - ', result.json());
                      const theme = result.json();
                      this.sbthemes = theme.subthemes;
                      this.name.setValue(theme.name);
                      this.image.setValue(theme.image);
                  })*/
              }
          },
      0);
  }

  createFormControls(){
      this.name = new FormControl('', Validators.required);
      this.body = new FormControl('', Validators.required);
  }

  createForm(){
      this.articleForm = new FormGroup({
        name: this.name,
        body: this.body
      });
  }

  onSubmit() {
      console.log('Submit - ', this.articleForm.value)
      //this.themeForm.value;

      if(this.bsModalRef.content._id){
          this.themeService.update(this.bsModalRef.content._id,
          {
              name: this.name.value,
              image: this.image.value,
              subthemes: this.sbthemes
          })
          .then(result=>{
              this.onClose.next(true);
              this.bsModalRef.hide();
          })
      } else {
          this.themeService.add({
              name: this.name.value,
              image: this.image.value,
              subthemes: this.sbthemes
          })
          .then(result=>{
              this.onClose.next(true);
              this.bsModalRef.hide();
          })
      }*/
  }

}

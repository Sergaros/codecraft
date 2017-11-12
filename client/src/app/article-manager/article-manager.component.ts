import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-article-manager',
  templateUrl: './article-manager.component.html',
  styleUrls: ['./article-manager.component.css']
})
export class ArticleManagerComponent implements OnInit {

    articleForm: FormGroup;
    name: FormControl;
    body: FormControl;

    themeId: string = '';
    subtheme: string = '';

    public onClose: Subject<boolean>;

  constructor(private articleService: ArticleService,
              private bsModalRef: BsModalRef) {
  }

  ngOnInit() {
      console.log('ngOnInit');
      this.onClose = new Subject();
      this.createFormControls();
      this.createForm();

      setTimeout(() => { //get params
          if(this.bsModalRef.content.themeId && //new
             this.bsModalRef.content.subtheme){

                 this.themeId = this.bsModalRef.content.themeId;
                 this.subtheme = this.bsModalRef.content.subtheme;

             } else if(this.bsModalRef.content._id){ //edit
                 console.log('edit article - ', this.bsModalRef.content._id);
                 this.articleService.get(this.bsModalRef.content._id)
                 .then(result=>{
                     const article = result.json();
                     console.log('article edit res - ', article);
                     this.themeId = article.theme;
                     this.subtheme = article.subtheme;
                     this.name.setValue(article.name);
                     this.body.setValue(article.body);
                 })
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
      if(this.articleForm.invalid)
        return;

      if(this.bsModalRef.content._id){ //edit
          this.articleService.update(this.bsModalRef.content._id, {
             name: this.name.value,
             body: this.body.value
         })
         .then(result=>{
             this.onClose.next(this.bsModalRef.content._id);
             this.bsModalRef.hide();
         });
     } else { //add new
         this.articleService.add({
             theme: this.themeId,
             subtheme: this.subtheme,
             name: this.name.value,
             body: this.body.value
         })
         .then(result=>{
             this.onClose.next(result.json()._id);
             this.bsModalRef.hide();
         })
     }
  }

}

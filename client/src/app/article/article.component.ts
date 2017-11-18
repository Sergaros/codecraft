import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ArticleManagerComponent } from '../article-manager/article-manager.component';
import { ArticleService } from './article.service';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs/Subject';
//import {Article} from './article'

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('data') article: any;
  @Output() articleChanged = new EventEmitter<string>();
  public onClose: Subject<boolean>;
  private bsModalRef: BsModalRef;

  constructor(private articleService: ArticleService,
              private authService: AuthService,
              private modalService: BsModalService) { }

  ngOnInit() {
      this.onClose = new Subject();
  }

  editArticle(){
      this.bsModalRef = this.modalService.show(ArticleManagerComponent, {class: 'modal-dialog modal-lg', animated: true, keyboard: true, ignoreBackdropClick: true});
      this.bsModalRef.content.title = 'Edit Article';
      this.bsModalRef.content._id = this.article._id;
      this.bsModalRef.content.onClose.subscribe(result => {
          //console.log('Edit Article - ', result);
          this.articleChanged.emit(result);
      });
  }

  deleteArticle(){
      this.articleService.delete(this.article._id)
      .then(result=>{
          this.articleChanged.emit('');
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ThemeService } from './theme.service';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from '../article/article.service';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router";

import { ArticleManagerComponent } from '../article-manager/article-manager.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: any = {};
  articles: any[] = [];
  currentArticle: any = {};

  private bsModalRef: BsModalRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private themeService: ThemeService,
              private articleService: ArticleService,
              private modalService: BsModalService) {

  }

  ngOnInit() {
      this.route.params.subscribe(params => {
            this.themeService.get(params.theme)
            .then(result=>{
                this.theme = result.json();
                //console.log('theme result - ', result.json())
            })
            .then(()=>{
                if(this.theme._id){
                    this.articleRefresh('');
                }
            })
      })
  }

  addArticle(subtheme: string){
      this.bsModalRef = this.modalService.show(ArticleManagerComponent, {class: 'modal-dialog modal-lg', animated: true, keyboard: true, ignoreBackdropClick: true});
      this.bsModalRef.content.title = 'Add Article';
      this.bsModalRef.content.themeId = this.theme._id;
      this.bsModalRef.content.subtheme = subtheme;
      this.bsModalRef.content.onClose.subscribe(result => {
          this.articleRefresh(result);
      });
  }

  getThemeArticles(subtheme){
      return this.articles.filter(a=>a.subtheme === subtheme);
  }

  articleRefresh(id: string){
      this.articleService.getAll(this.theme._id)
      .then(result=>{
          //console.log('Articles - ', result.json());
          this.articles = result.json();
          if(this.articles.length){
              if(id)
                  this.currentArticle = this.articles.find(art=>art._id===id);
              else
                  this.currentArticle = this.articles[0];
          }
      })
  }

}

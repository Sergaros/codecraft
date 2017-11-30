import { Component, OnInit, TemplateRef} from '@angular/core';
import { ThemeHeaderComponent } from '../theme-header/theme-header.component';
import { ThemeHeader } from '../theme-header/theme-header';
import { CvComponent } from '../cv/cv.component';
import { AuthService } from '../auth.service';
import { ThemeService } from '../theme/theme.service';

import { ThemeManagerComponent } from '../theme-manager/theme-manager.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    themes: ThemeHeader[];
    private bsModalRef: BsModalRef;

    constructor(private auth: AuthService,
                private themeService: ThemeService,
                private modalService: BsModalService) {
    }

  ngOnInit() {
      this.refreshThemes();
  }

  isAuth(){
      return this.auth.isAuthenticated;
  }

  showThemeManager(){
      this.bsModalRef = this.modalService.show(ThemeManagerComponent, {class: 'modal-dialog modal-sm', animated: true, keyboard: true, ignoreBackdropClick: true});
      this.bsModalRef.content.title = 'Add theme';
      this.bsModalRef.content.onClose.subscribe(result => {
          this.refreshThemes();
      });
  }

  refreshThemes():void{
      this.themes = [];
      this.themeService.getAll()
      .then(result=>{
          console.log('Refresh Themes - ', result.json());
          result.json().forEach(theme=>{
              if(this.isAuth() || !theme.ishide)
                  this.themes.push(new ThemeHeader(
                     theme.name.toLowerCase().split('.')[0],
                     theme.image,
                     theme.name,
                     theme._id,
                     theme.subthemes,
                     theme.ishide
                 ))
         });
      })
  }

  themeChanged(){
      //console.log('Theme changed')
      this.refreshThemes();
  }

}

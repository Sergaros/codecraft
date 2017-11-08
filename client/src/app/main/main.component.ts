import { Component, OnInit } from '@angular/core';
import { ThemeHeaderComponent } from '../theme-header/theme-header.component';
import { ThemeHeader } from '../theme-header/theme-header';
import { CvComponent } from '../cv/cv.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    private themes: ThemeHeader[];

    constructor(private auth: AuthService) {

    }

  ngOnInit() {
      console.log('isAuth - ', this.auth.isAuthenticated);
      this.themes = [
          new ThemeHeader('angular','/assets/img/angular.svg','Angular.js', ['Templates', 'Snippets', 'Others']),
          new ThemeHeader('node','/assets/img/nodejs.svg','Node.js', ['Templates', 'Snippets', 'Others']),
          new ThemeHeader('mongodb','/assets/img/mongo.png','MongoDB', ['Templates', 'Snippets', 'Others']),
          new ThemeHeader('redis','/assets/img/redis.svg','Redis', ['Templates', 'Snippets', 'Others']),
          new ThemeHeader('docker','/assets/img/docker.svg','Docker', ['Templates', 'Snippets', 'Others']),
      ];
  }

  isAuth(){
      //console.log('isAuth - ', this.auth.isAuthenticated);
      return this.auth.isAuthenticated;
  }

}

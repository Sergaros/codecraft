import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ThemeService } from './theme.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private themeService: ThemeService) {
    this.route.params.subscribe(params => {
      console.log('params - ', params);
      themeService.get(params.theme)
      .then(result=>{
          console.log('theme result - ', result.json())
      })
    })
  }

  ngOnInit() {
  }

}

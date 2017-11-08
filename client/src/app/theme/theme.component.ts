import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('params - ', params);
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ThemeHeader } from './theme-header';
import {Router} from "@angular/router";

@Component({
    selector: 'app-theme-header',
    templateUrl: './theme-header.component.html',
    styleUrls: ['./theme-header.component.css']
})
export class ThemeHeaderComponent implements OnInit {
    @Input() theme: ThemeHeader;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goTo(theme: string, stheme: string) {
        console.log('goTo - ', theme, stheme);
        this.router.navigate(['work', {theme, stheme}]);
    }
}

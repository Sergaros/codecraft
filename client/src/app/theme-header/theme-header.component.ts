import { Component, OnInit, Input } from '@angular/core';
import { ThemeHeader } from './theme-header';

@Component({
    selector: 'app-theme-header',
    templateUrl: './theme-header.component.html',
    styleUrls: ['./theme-header.component.css']
})
export class ThemeHeaderComponent implements OnInit {
    @Input() theme: ThemeHeader;

    constructor() { }

    ngOnInit() {
    }
}

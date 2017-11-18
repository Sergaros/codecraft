import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ThemeHeader } from './theme-header';
import {Router} from "@angular/router";
import { ThemeService } from '../theme/theme.service';
import { AuthService } from '../auth.service';

import { ThemeManagerComponent } from '../theme-manager/theme-manager.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-theme-header',
    templateUrl: './theme-header.component.html',
    styleUrls: ['./theme-header.component.css']
})
export class ThemeHeaderComponent implements OnInit {
    @Input() theme: ThemeHeader;
    @Output() themeChanged = new EventEmitter<void>();
    private bsModalRef: BsModalRef;

    constructor(private router: Router,
                private themeService: ThemeService,
                private authService: AuthService,
                private modalService: BsModalService) { }

    ngOnInit() {
    }

    goTo(theme: string, stheme: string) {
        //console.log('goTo - ', theme, stheme);
        this.router.navigate(['work', {theme, stheme}]);
    }

    editTheme(){
        this.bsModalRef = this.modalService.show(ThemeManagerComponent, {class: 'modal-dialog modal-sm', animated: true, keyboard: true, ignoreBackdropClick: true});
        this.bsModalRef.content.title = 'Edit theme';
        this.bsModalRef.content._id = this.theme._id;
        this.bsModalRef.content.onClose.subscribe(result => {
            //this.refreshThemes();
            this.themeChanged.emit();
        });
    }

    deleteTheme(){
        this.themeService.delete(this.theme._id)
        .then(result=>{
            this.themeChanged.emit();
        })
    }

    isAuth(){
        return this.authService.isAuthenticated;
    }
}

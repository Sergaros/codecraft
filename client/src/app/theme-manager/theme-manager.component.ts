import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.css']
})
export class ThemeManagerComponent implements OnInit {

    themeForm: FormGroup;
    name: FormControl;
    image: FormControl;
    nsbtheme: FormControl;
    public title: string;

    sbthemes: string[];

    public onClose: Subject<boolean>;

    constructor(private bsModalRef: BsModalRef, private themeService: ThemeService) {
        this.sbthemes = [];
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.onClose = new Subject();
        this.createFormControls();
        this.createForm();

        setTimeout(() => {
                if(this.bsModalRef.content._id){
                    this.themeService.get(this.bsModalRef.content._id)
                    .then(result=>{
                        //console.log('Edit theme - ', result.json());
                        const theme = result.json();
                        this.sbthemes = theme.subthemes;
                        this.name.setValue(theme.name);
                        this.image.setValue(theme.image);
                    })
                }
            },
        0);
    }

    onSubmit() {
        //console.log('Sbmit - ', this.themeForm.value)
        //this.themeForm.value;

        if(this.bsModalRef.content._id){
            this.themeService.update(this.bsModalRef.content._id,
            {
                name: this.name.value,
                image: this.image.value,
                subthemes: this.sbthemes
            })
            .then(result=>{
                this.onClose.next(true);
                this.bsModalRef.hide();
            })
        } else {
            this.themeService.add({
                name: this.name.value,
                image: this.image.value,
                subthemes: this.sbthemes
            })
            .then(result=>{
                this.onClose.next(true);
                this.bsModalRef.hide();
            })
        }
    }

    createFormControls() {
     this.name = new FormControl('', Validators.required);
     this.image = new FormControl('', Validators.required);
     this.nsbtheme = new FormControl('');
   }

   createForm() {
     this.themeForm = new FormGroup({
       name: this.name,
       image: this.image,
       nsbtheme: this.nsbtheme
     });
   }

   addSubTheme(){
       this.sbthemes.push(this.nsbtheme.value);
       this.nsbtheme.setValue('');
   }

   removeSubTheme(sbtheme: string){
       let index = this.sbthemes.findIndex(sbt=>sbt===sbtheme);
       if(index !== -1){
           this.sbthemes.splice(index, 1);
       }
   }

}

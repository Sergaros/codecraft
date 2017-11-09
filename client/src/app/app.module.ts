import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ThemeHeaderComponent } from './theme-header/theme-header.component';
import { CvComponent } from './cv/cv.component';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeService } from './theme/theme.service';
import { ArticleComponent } from './article/article.component';
import { ThemeManagerComponent } from './theme-manager/theme-manager.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'work', component: ThemeComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemeHeaderComponent,
    CvComponent,
    LoginComponent,
    ThemeComponent,
    ArticleComponent,
    ThemeManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MarkdownModule.forRoot(),
    RecaptchaModule.forRoot()
  ],
  entryComponents: [
     LoginComponent,
     ThemeManagerComponent
  ],
  providers: [AuthService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

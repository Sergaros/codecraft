import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { MainComponent } from './main/main.component';
import { ThemeHeaderComponent } from './theme-header/theme-header.component';
import { CvComponent } from './cv/cv.component';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'work', component: WorkComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    MainComponent,
    ThemeHeaderComponent,
    CvComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
     LoginComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

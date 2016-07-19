import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MdToolbar, MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MdButton, MdIcon],
  providers: [MdIconRegistry]
})

export class AppComponent {
  title: string;
  name: string;
  email: string;
  profile_picture: string;
  constructor() {
    this.title = "app-root works!";
    this.name = "Dom Farolino"
    this.email = "domfarolino@gmail.com"
    this.profile_picture = "https://avatars1.githubusercontent.com/u/9669289?v=3&u=bae745ca66c93542c77bb0b5faa66ccf26f3df1b&s=140";
  }
  
  goToBlog(): void {
    window.location.href = 'https://chinocode.com';
  }
}
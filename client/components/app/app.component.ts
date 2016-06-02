import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: 'client/components/app/app.component.html',
  styleUrls: ['client/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MD_CARD_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, MdIcon, MD_LIST_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, MdIconRegistry]
})

@Routes([
  {
    path: '/',
    component: HomeComponent
  }
])

export class AppComponent {
  title: string = "ACM at University of Cincinnati";
  constructor() { }
}
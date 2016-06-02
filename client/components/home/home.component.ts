import { Component, AfterViewInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'home',
  templateUrl: 'client/components/home/home.component.html',
  styleUrls: ['client/components/home/home.component.css'],
  directives: [MdButton, MD_CARD_DIRECTIVES, MD_SIDENAV_DIRECTIVES]
})

export class HomeComponent implements AfterViewInit {
  constructor() {
  }
  
  ngAfterViewInit() {

  }
}
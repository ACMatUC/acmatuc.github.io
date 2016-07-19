import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MdButton, MD_CARD_DIRECTIVES]
})

export class HomeComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
    
  }

}
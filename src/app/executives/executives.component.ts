import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'executives',
  templateUrl: 'executives.component.html',
  styleUrls: ['executives.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MD_CARD_DIRECTIVES]
})
export class ExecutivesComponent implements OnInit {
  executives: Object[];
  imgBaseURL: string = "assets/img/";
  constructor(private _router: Router) {}

  ngOnInit() {
    this.executives = [
      {
        role: "President",
        name: "Kurt Lewis",
        image: this.imgBaseURL + "president.jpg",
        bio: `My name is Kurt Lewis and I am a third year computer science major.
              I am involved in student organizations such as CEAS ambassadors and engineering
              tribunal. I've been involved with ACM for two years, previously serving as treasurer.
              I've been programming for 5 years, and I enjoy working with new technology. I'm excited
              about the opportunities ACM has to offer and I look forward to building a computing community
              at UC.`
      },
      {
        role: "Vice President",
        name: "Juanita Dickhaus",
        image: this.imgBaseURL + "vice-president.jpg",
        bio: `Apparently this executive likes to keep an air of mystery about themselves...`
      },
      {
        role: "Treasurer",
        name: "Kyle Arens",
        image: this.imgBaseURL + "treasurer.jpg",
        bio: `Apparently this executive likes to keep an air of mystery about themselves...`
      },
      {
        role: "Secretary",
        name: "Noah Bass",
        image: this.imgBaseURL + "secretary.jpg",
        bio: `Apparently this executive likes to keep an air of mystery about themselves...`
      },
      {
        role: "Web Master",
        name: "Dom Farolino",
        image: this.imgBaseURL + "webmaster.jpg",
        bio: `Apparently this executive likes to keep an air of mystery about themselves...`
      }
    ];
  }

}

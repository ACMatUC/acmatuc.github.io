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
        bio: `I'm a 3rd year computer science major involved in several student organizations
              such as CEAS ambassadors and engineering tribunal. I've been involved with ACM for
              two years, previously serving as treasurer. I've been programming for 5 years and
              enjoy working with new technology. I'm excited about the opportunities ACM has to
              offer and I look forward to building a computing community at UC.`
      },
      {
        role: "Vice President",
        name: "Juanita Dickhaus",
        image: this.imgBaseURL + "vice-president.jpg",
        bio: `I'm a 5th year computer science major involved in organizing hackathons as well as several
              student organizations including ACM-W. I do mostly JavaScript and front-end development on co-op,
              and am working towards a stronger level of fluency in general full stack development. I'm currently
              interested in data science and engineering research. Feel free to contact me at juanitadickhaus@gmail.com
              if you'd like academic help, advice, or to connect with various student groups on campus.`
      },
      {
        role: "Treasurer",
        name: "Kyle Arens",
        image: this.imgBaseURL + "treasurer.jpg",
        bio: `I’m a 4th year computer science student here at UC. In addition to serving as the treasurer for ACM, I’m
              also the Vice President for the UC Club Ice Hockey Team. I’m looking forward to helping run ACM this year, and
              bring great events and a great community to our members.`
      },
      {
        role: "Secretary",
        name: "Noah Bass",
        image: this.imgBaseURL + "secretary.jpg",
        bio: `I'm a 2nd year computer science major at UC, and my favorite language is JavaScript. My spirit animal is a turtle,
              my favorite color is blue, and I'm currently interning with Siemens PLM Software.`
      },
      {
        role: "Web Master",
        name: "Dom Farolino",
        image: this.imgBaseURL + "webmaster.jpg",
        bio: `I'm a 3rd year computer science major at UC. In my free time I like to study algorithms and math as well as build
              progressive web apps. My favorite languages are C++ and JavaScript in that order. I'm a big advocate of the modern
              open web platform and wish to work somewhere that allows me to make the web do everything native can on every platform.`
      }
    ];
  }

}

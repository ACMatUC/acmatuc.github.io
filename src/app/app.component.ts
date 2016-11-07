import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
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

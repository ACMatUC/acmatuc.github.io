import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExecutivesComponent } from './executives/executives.component';

const routes: RouterConfig = [
  { path: '', component: HomeComponent},
  { path: 'executives', component: ExecutivesComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
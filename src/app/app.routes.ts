import { Routes } from '@angular/router';
import { Home } from './home/home'
import { LinkRedirect } from './link-redirect/link-redirect';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'linkedin',
    component: LinkRedirect,
    data: { url: 'https://www.linkedin.com/in/itsanandnihal' }
  },
  {
    path: 'artstation',
    component: LinkRedirect,
    data: { url: 'https://www.artstation.com/itsanandnihal' }
  },
  {
    path: 'cgtrader',
    component: LinkRedirect,
    data: { url: 'https://www.cgtrader.com/designers/neu-blend' }
  },
  {
    path: 'gumroad',
    component: LinkRedirect,
    data: { url: 'https://neublend.gumroad.com/' }
  },
  {
    path: 'email',
    component: LinkRedirect,
    data: { url: 'mailto:itsanandnihal@example.com' }
  }
];
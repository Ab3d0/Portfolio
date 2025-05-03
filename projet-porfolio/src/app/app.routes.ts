import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [{

    
    path: '',
    redirectTo: '',
    pathMatch: 'full'
    

},
{
    path: 'home',
    component: HeroComponent
},{
    path: 'education',
    component: ParcoursComponent
},{
    path: 'experience',
    component: PortfolioComponent
},{
    path: 'contact',
    component: ContactComponent
}




    
];

import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ParcoursComponent } from "./components/parcours/parcours.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, ParcoursComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-porfolio';
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent  {
  index = 0;


  projects = [
    {
      number: '01',
      title: 'Snake-Game-in-C',
      description: `J'ai développé une version du jeu Snake en C 89, où le joueur 
            contrôle un serpent qui doit manger des pommes tout en évitant
            des obstacles. L'objectif est de battre le record en accumulant 
            le plus de points possible sans entrer en collision. 
            Ce projet m'a permis de renforcer mes compétences en programmation 
            en C, en gestion de la mémoire et en manipulation des graphiques en 
            mode console. J'ai également appris à gérer les entrées utilisateur 
            en temps réel et à implémenter des algorithmes de détection de
            collision. Le code est modulaire et bien commenté pour faciliter 
            la maintenance et les améliorations futures.`,
      tech: 'C89',
      liveLink: '#',
      githubLink: 'https://github.com/Ab3d0/Snake-Game-in-C',
      image: './img/Snake.png'

    },
    {
      number: '02',
      title: 'Market-place',
      description: `J'ai réalisé une marketplace en HTML, CSS et 
                        JavaScript pour notre entreprise fictive SkateCraft. 
                        Cette plateforme permet de vendre des kits modulables, 
                        ainsi que divers objets et matériaux en rapport avec 
                        l'univers du skateboard. Le site offre une expérience 
                        utilisateur fluide et intuitive, avec des fonctionnalités 
                        de recherche, de filtrage et de panier d'achat. Ce projet 
                        m'a permis de développer mes compétences en développement 
                        web front-end et en design responsive. Le code est bien 
                        structuré et commenté pour faciliter la maintenance et les 
                        futures améliorations.`,
      tech: 'HTML, CSS, Javascript',
      liveLink: '#',
      githubLink: 'https://github.com/Ab3d0/MarketPlace_SkateCraft-HTML-CSS-',
      image: './img/Market_place.png'

    },
    {
      number: '03',
      title: 'Sudoku_Java',
      description: `J'ai développé un jeu de Sudoku en Java, comprenant 
                        deux parties distinctes : une pour créer des grilles de 
                        Sudoku et une autre pour jouer. La partie création génère 
                        des grilles de difficulté variable, tandis que la partie 
                        jeu permet aux utilisateurs de résoudre ces grilles. 
                        Ce projet m'a permis de renforcer mes compétences en 
                        programmation en Java, en gestion des interfaces utilisateur 
                        et en implémentation d'algorithmes de résolution de puzzles. 
                        Le code est modulaire et bien commenté pour faciliter 
                        la maintenance et les améliorations futures.`,
      tech: 'Java',
      liveLink: '#',
      githubLink: 'https://github.com/Ab3d0/ProjetJava-Sudoku',
      image: './img/Sudoku.png'

    },
    {
      number: '04',
      title: 'Site_Streaming',
      description: `J'ai réalisé un site de streaming en utilisant une base de données et PHP, en suivant le modèle MVC (Modèle-Vue-Contrôleur). 
                        Ce projet permet aux utilisateurs de diffuser et de regarder des vidéos en ligne, avec des fonctionnalités telles que la recherche, 
                        la gestion des utilisateurs et la recommandation de contenu. Ce développement m'a permis de renforcer mes compétences en gestion de 
                        bases de données, en programmation PHP et en architecture logicielle. 
                        Le code est bien structuré et commenté pour faciliter la maintenance et les futures améliorations.`,
      tech: 'PHP avec code initer',
      liveLink: '#',
      githubLink: 'https://github.com/Ab3d0/Site_WebStreamingPHP',
      image: './img/Site_streaming.png'

    },
  ]



  nextProject(): void{
    if(this.index < this.projects.length - 1){
      this.index++;
    }
  }

  previousProject(): void{
    if(this.index > 0){
      this.index--;
    }
  }


  
 






 

}

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
      title: 'Site Streaming',
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
    {
      number: '05',
      title: 'Jeu de Tuiles – Dorfromantik',
      description: `J'ai conçu un jeu en Java inspiré de Dorfromantik, où le joueur assemble des tuiles hexagonales représentant différents terrains (mer, forêt, montagne, etc.) pour construire un paysage harmonieux. 
                    Le joueur choisit la position et l’orientation des tuiles à chaque tour, en respectant des contraintes d’adjacence. Le score final dépend de la taille des ensembles de terrains connectés.
                    Une base de données en PHPMyAdmin permet de stocker les parties et les scores selon des séries prédéfinies.
                    Ce projet m’a permis de développer mes compétences en Java, en conception algorithmique, ainsi qu’en interaction avec une base de données.`,
      tech: 'Java, PHPMyAdmin, MVC',
      liveLink: '#',
      githubLink: '',
      image: './img/Dorfromantik.png'
    },
    {
      number: '06',
      title: 'Site de Bibliothèque',
      description: `Ce projet est un site web de gestion de bibliothèque permettant d’ajouter, modifier et supprimer des livres. L’interface utilisateur a été développée en HTML, CSS et JavaScript, 
                    tandis que le backend repose sur PHP avec une base de données pour stocker les livres. Le déploiement a été réalisé via Docker en utilisant des Dockerfiles et un fichier docker-compose 
                    pour orchestrer les différents services (frontend, backend, base de données). Ce projet m’a permis de comprendre les bases du déploiement avec Docker et d’intégrer toute une application web dans des conteneurs.`,
      tech: 'HTML, CSS, JS, PHP, Docker, Docker Compose',
      liveLink: '#',
      githubLink: '',
      image: './img/site_bibliotheque.png'
    },
    {
      number: '07',
      title: 'Relier les Points – Puzzle Android',
      description: `J'ai développé une application Android en Java inspirée du jeu "Flow Free". Le but est de relier des paires de points de même couleur dans une grille carrée sans croiser les chemins, 
                    tout en remplissant toutes les cases. L’application propose un menu interactif, un mode de configuration pour les personnes daltoniennes, et utilise des fichiers XML pour le stockage des puzzles. 
                    Ce projet m’a permis d’apprendre le développement mobile Android, la gestion d’activités, les fichiers assets, et le parsing XML.`,
      tech: 'Java (Android), XML',
      liveLink: '#',
      githubLink: '',
      image: './img/relier_points.jpg'
    },
    {
      number: '08',
      title: 'Site vitrine - Yesil Conseil',
      description: `J'ai conçu et développé le site vitrine de l’entreprise Yesil Conseil en utilisant Angular pour le framework frontend et TailwindCSS pour le design. 
                    Le site met en valeur les services proposés par l'entreprise, son expertise, et permet aux clients potentiels de la contacter facilement via un formulaire intégré. 
                    Le projet met l’accent sur une navigation fluide, un design moderne et responsive, et une architecture bien structurée en composants Angular. 
                    Cette réalisation m’a permis de consolider mes compétences en développement web moderne et en intégration responsive.`,
      tech: 'Angular, TailwindCSS',
      liveLink: '#',
      githubLink: 'https://github.com/Ab3d0/Site-YesilConseil',
      image: './img/site_yesilconseil.png'
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

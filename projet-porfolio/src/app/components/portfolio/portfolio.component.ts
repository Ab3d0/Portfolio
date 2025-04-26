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
      title: 'Website Yesil Conseil',
      description: '',
      tech: 'Angular, Tailwind',
      liveLink: '#',
      githubLink: '#',
      image: './img/projet.jpg'

    },
    {
      number: '02',
      title: 'Website Yesil Conseil',
      description: '',
      tech: 'Angular, Tailwind',
      liveLink: '#',
      githubLink: '#',
      image: './img/project-management.png'

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

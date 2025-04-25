import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-parcours',
  imports: [CommonModule],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.css'
})
export class ParcoursComponent {
  activeSection: string = 'experience';

  setActiveSection(section: string){
    this.activeSection = section;
  }

}

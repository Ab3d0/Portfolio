import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };


  constructor(private contactService: ContactService) {}

  onSubmit(){
    this.contactService.sendContactForm(this.formData).subscribe(response => {
        console.log('Réponse de l\'API:', response);
    }, error => {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    
    });
  }

}

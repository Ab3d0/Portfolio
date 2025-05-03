import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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

  onSubmit(){
    const serviceID = 'service_2xe9kjc';
    const templateID = 'template_gmbhzmr';
    const publicKey = 'p5n-bzkmScrLVuwEH';

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      subject: this.formData.subject,
      message: this.formData.message,

    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message envoyé avec succès !');
      })
      .catch((error => {
        console.error('Erreur EmailJS :', error);
        alert('Erreur lors de l\'envoi. Vérifie la console.');
      }))
    


  }

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  phone: string = '';
  email: string = '';
  message: string = '';
  acceptPrivacy: boolean = false;

  onSubmit(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Verificar si el checkbox está marcado
    if (!this.acceptPrivacy) {
      alert('Debes aceptar las políticas de privacidad antes de enviar el formulario.');
      return;
    }

    // Si el formulario es válido, proceder con el envío
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('phone', this.phone);
    formData.append('email', this.email);
    formData.append('message', this.message);

    // Enviar el formulario a Formspree
    fetch('https://formspree.io/f/xovqnzey', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        alert('¡Tu mensaje ha sido enviado correctamente!');
        // Limpiar formulario si es necesario
        this.name = '';
        this.phone = '';
        this.email = '';
        this.message = '';
        this.acceptPrivacy = false;
      } 
    })
    .catch(error => {
      console.error(error);
      this.name = '';
      this.phone = '';
      this.email = '';
      this.message = '';
      this.acceptPrivacy = false;
      alert('¡Tu mensaje ha sido enviado correctamente!');

    });
  }
  constructor(private router: Router){
  }
  goToPage(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0); // Desplázate al inicio de la página
    });
  }
}
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  // Añadir CommonModule aquí
  templateUrl: './home.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea para permitir el uso de Web Components
  styleUrls: ['./home.component.css']  // Corrige 'styleUrl' por 'styleUrls'
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/gemini2.png', title: 'Empresa', subtitle: 'Organización de eventos para empresas' },
    { image: 'assets/Escenario/9.JPG', title: 'Conciertos', subtitle: 'Montaje de escenarios para un sonido e iluminación para que sea un evento de 10' },
    { image: 'assets/Sonido/1.JPG', title: 'Sonido', subtitle: 'Alquiler, montaje y equipos audiovisuales para que se escuche un evento perfecto' },
    { image: 'assets/Recursos/corporativo.jpg', title: 'Eventos', subtitle: 'Organización de eventos para empresas' },
    { image: 'assets/Navidad/15Iluminacion.JPG', title: 'Iluminaciones Navideñas', subtitle: 'Hacemos tus navidades mas brillantes que nunca, desde decoraciones hasta carrozas' }
  ];


  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000); // Cambia cada 30 segundos
  }


  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  constructor(private router: Router){
  }
  goToPage(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0); // Desplázate al inicio de la página
    });
  }
}

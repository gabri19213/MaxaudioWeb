import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule], // Incluir CommonModule aquí
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements AfterViewInit {
  images: string[] = [
    'assets/Recursos/logo1.png',
    'assets/Recursos/logo2.png',
    'assets/Recursos/logo1.png',
    'assets/Recursos/logo2.png',
    'assets/Recursos/logo1.png',
    'assets/Recursos/logo2.png',
    'assets/Recursos/logo1.png'
  ];
  currentTranslate = 0; // Posición actual
  track: HTMLElement | null = null;
  intervalId: any;

  ngAfterViewInit(): void {
    this.track = document.querySelector('.carousel-track') as HTMLElement;

    // Inicia el movimiento automático si el track está definido
    if (this.track) {
      this.startCarousel();
    }
  }

  startCarousel(): void {
    const itemWidth = 200; // Ancho estimado de cada ítem (ajustar según tu CSS)

    this.intervalId = setInterval(() => {
      if (this.track) {
        this.currentTranslate -= itemWidth; // Desplaza hacia la izquierda
        this.track.style.transition = 'transform 0.5s ease';
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;

        // Al completar el desplazamiento, reorganiza los elementos
        setTimeout(() => {
          const firstChild = this.track?.children[0] as HTMLElement;
          if (firstChild && this.track) {
            this.track.appendChild(firstChild); // Mueve el primer elemento al final
            this.currentTranslate += itemWidth; // Resetea la posición del track
            this.track.style.transition = 'none';
            this.track.style.transform = `translateX(${this.currentTranslate}px)`;
          }
        }, 500); // Ajusta al tiempo de transición (0.5s)
      }
    }, 2000); // Intervalo entre desplazamientos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo al destruir el componente
    }
  }
}

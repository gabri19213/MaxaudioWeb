import { Component,  AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navidad',
  standalone: true,
  imports: [],
  templateUrl: './navidad.component.html',
  styleUrl: './navidad.component.css'
})
export class NavidadComponent implements AfterViewInit {

  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const snowContainer = document.querySelector('.snow-container');
    if (snowContainer) {
      this.createSnowflakes(snowContainer);
    }
  }

  createSnowflakes(container: Element): void {
    // Crear 50 copos de nieve
    for (let i = 0; i < 50; i++) {
      const snowflake = this.renderer.createElement('div');
      this.renderer.addClass(snowflake, 'snowflake');
      snowflake.innerHTML = '&#10052;'; // Caracter de copo de nieve
      this.setRandomPosition(snowflake);
      container.appendChild(snowflake);
    }
  }

  setRandomPosition(element: HTMLElement): void {
    const randomLeft = Math.random() * 100; // Posición aleatoria horizontal
    const randomDelay = Math.random() * 5; // Retraso aleatorio
    const randomDuration = 8 + Math.random() * 10; // Duración de la animación

    this.renderer.setStyle(element, 'left', `${randomLeft}vw`);
    this.renderer.setStyle(element, 'animation-delay', `${randomDelay}s`);
    this.renderer.setStyle(element, 'animation-duration', `${randomDuration}s`);
  }
}



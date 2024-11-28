import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Title } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  private originalTitle: string = 'MAXAUDIO - Sonido Profesional'; // Título original
  private changeTitles: string[] = [
    '¡No te vayas tan pronto!',   // Primer título alternativo
    '¡Te estamos esperando!',      // Segundo título alternativo
    '¡Vuelve a disfrutar con nosotros!' // Tercer título alternativo
  ];

  private currentIndex: number = 0; // Índice para los títulos alternativos

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.originalTitle);
    this.listenVisibilityChange();
  }

  private listenVisibilityChange(): void {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.titleService.setTitle(this.changeTitles[this.currentIndex]); // Cambiar a un título alternativo
        this.currentIndex = (this.currentIndex + 1) % this.changeTitles.length; // Incrementar índice y reiniciar si es necesario
      } else {
        this.titleService.setTitle(this.originalTitle); // Restablecer el título al volver
      }
    });
  }

  ngOnDestroy(): void {
    // Eliminar el listener cuando se destruye el componente
    document.removeEventListener('visibilitychange', this.listenVisibilityChange);
  }
}
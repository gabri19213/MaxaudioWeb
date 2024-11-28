import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateMenuState();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateMenuState();
  }

  // Detectar clics fuera del menú y cerrar
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(target) && !target.classList.contains('menu-toggle')) {
      this.closeMenu();
    }
  }

  // Detectar clic en enlaces y cerrar el menú
  handleMenuClick() {
    this.closeMenu();
  }

  // Actualiza el estado visual del menú
  private updateMenuState() {
    const menu = document.querySelector('nav ul');
    if (menu) {
      menu.classList.toggle('active', this.isMenuOpen);
    }
  }
}

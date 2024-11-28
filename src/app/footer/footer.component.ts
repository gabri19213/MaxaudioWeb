import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router){
  }
  goToPage(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0); // Desplázate al inicio de la página
    });
  }
}

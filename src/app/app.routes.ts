import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';  // Importa el componente
import {SonidoComponent } from './sonido/sonido.component';  // Importa el componente
import {EventosComponent } from './eventos/eventos.component';  // Importa el componente
import {CamarasComponent } from './camaras/camaras.component';  // Importa el componente
import {BodasComponent } from './bodas/bodas.component';  // Importa el componente
import {TrabajoComponent } from './trabajo/trabajo.component';  // Importa el componente
import {NavidadComponent } from './navidad/navidad.component';  // Importa el componente
import {PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';  // Importa el componene


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path : 'contact', component: ContactComponent},
    { path: 'sobre-nosotros', component: SobreNosotrosComponent },
    { path: 'sonido', component: SonidoComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'camaras', component: CamarasComponent },
    { path: 'bodas', component: BodasComponent },
    { path: 'trabajo', component: TrabajoComponent },
    { path: 'navidad', component: NavidadComponent },
    { path: 'politica', component: PrivacyPolicyComponent },


];

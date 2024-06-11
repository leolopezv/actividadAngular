import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component'
import { ServiciosComponent } from './shared/servicios/servicios.component';
import { ContactoComponent } from './shared/contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/quienes-somos', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/quienes-somos' } // Ruta comodín para página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

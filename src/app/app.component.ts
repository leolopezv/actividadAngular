import { Component } from '@angular/core';
import { provideRouter, RouterOutlet, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ContactoComponent } from './shared/contacto/contacto.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ServiciosComponent } from './shared/servicios/servicios.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LogoComponent } from './shared/logo/logo.component';
import { FooterpageComponent } from './shared/footerpage/footerpage.component';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ContactoComponent,
    HttpClientModule,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    MenuComponent,
    LogoComponent,
    FooterpageComponent
  ],
  providers: [
    UserService
  ]
})

export class AppComponent {

  title = 'actividadAngular';
  users: User[] = [];

  constructor(private userService: UserService) {
    userService.obtenerDatos().subscribe(respuesta => {
      this.users = respuesta as Array<User>;
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
    if (this.authService.loggedIn)
      this.router.navigate(['/dashboard']);
  }

  onLoginSubmit() {
    // Create the user person
    const user = {
      username: this.username,
      password: this.password
    }

    // Crea la petición para autenticar al usuario
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        // Login correcto, se almacenan los datos del usuario en el almacenamiento local
        this.authService.storeUserData(data.token, data.user)
        // Mensaje de login correcto
        this.flashMessage.show("Has iniciado sesión", {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.router.navigate(['/dashboard']);
      } else {
        // Mensaje de login incorrecto
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['/login']);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { NgFlashMessageService } from 'ng-flash-messages';
import * as $ from 'jquery';

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
    private ngFlashMessageService: NgFlashMessageService,
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
        // Show message as logged in
        this.ngFlashMessageService.showFlashMessage({
          messages: ["¡Ya está conectado, bienvenido!"],
          dismissible: true,
          timeout: false,
          type: 'success'
        });
        this.router.navigate(['/dashboard']);
      } else {
        // Show message as cant log in
        this.ngFlashMessageService.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: false,
          type: 'danger'
        });
        this.router.navigate(['/login']);
      }
    });
  }

}

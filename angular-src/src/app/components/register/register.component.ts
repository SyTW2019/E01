import { Component, OnInit } from '@angular/core';

// Import of the services
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

// Import of the module for the flash messages
import { NgFlashMessageService } from 'ng-flash-messages';
import * as $ from 'jquery';

// Bring out the Router so we can redirect from the code
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // Variables to use
  name: String;
  username: String;
  email: String;
  password: String;
  universidad: String;

  constructor(
    // Need to inject all the services in the constructor
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  // Validar email en el momento
  /*onChangeEmail() {
    const user = { email: this.email,}

    if (!this.validateService.validateEmail(user.email)) {
      $("input[name='email']").removeClass('ng-valid');
      $("input[name='email']").addClass('ng-invalid');

      return false;
    } else {
      $("input[name='email']").removeClass('ng-invalid');
      $("input[name='email']").addClass('ng-valid');
      return true;
    }
  }*/

  // Al hacer submit del formulario
  onRegisterSubmit() {
    // Se crea el objeto usuario con los campos
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      universidad: this.universidad
    }

    // Validación de campos
    if (!this.validateService.validateRegister(user)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Por favor rellene los campos"],
        dismissible: true,
        timeout: false,
        type: 'danger'
      });
      return false;
    }

    // Validación de email
    if (!this.validateService.validateEmail(user.email)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Por favor, use un campo de email válido"],
        dismissible: true,
        timeout: false,
        type: 'danger'
      });
      return false;
    }

    // Validación de la Universidad
    /*this.validateUni.getUniByName(user.universidad, (err) => { console.log("HEEY");
      if (err) {
        this.flashMessage.show('Introduce un nombre de Universidad válido', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }
    });*/

    // Registro de usuario
    // Use the service with the function and the user object as is an observable
    // we need to subscribe to it and inside we have the data back
    this.authService.registerUser(user).subscribe(data => {
      // Si se ha regitrado correctametne
      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["¡Ahora ya está registrado! Bienvenido."],
          dismissible: true,
          timeout: false,
          type: 'success'
        });
        // Redirecciona al formulario de login
        this.router.navigate(['/login']);
      } 
      // Si no se ha registrado
      else {
        this.ngFlashMessageService.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: false,
          type: 'danger'
        });
        // Redirecciona al mismo formulario
        this.router.navigate(['/register']);
      }
    });

  }
}

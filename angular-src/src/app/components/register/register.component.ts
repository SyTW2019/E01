import { Component, OnInit } from '@angular/core';

// Import of the services
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

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
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    // Create the user object
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      universidad: this.universidad
    }

    // Required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Por favor rellene los campos', { cssClass: 'alert-danger', timeout: 99999999999 });
      return false;
    }

    // Validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Por favor, use un campo de email válido', { cssClass: 'alert-danger', timeout: 99999999999 });
      return false;
    }

    // Validación de la Universidad
    /*this.validateUni.getUniByName(user.universidad, (err) => { console.log("HEEY");
      if (err) {
        this.flashMessage.show('Introduce un nombre de Universidad válido', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }
    });*/

    // Register user
    // Use the service with the function and the user object as is an observable
    // we need to subscribe to it and inside we have the data back
    this.authService.registerUser(user).subscribe(data => {
      // Lets validate the response and show the user the response with an alert
      if (data.success) {
        this.flashMessage.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
        // If the registration is success move to the login component
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        // If the registration is success move to the login component
        this.router.navigate(['/register']);
      }
    });

  }
}

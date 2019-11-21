import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

//import { FlashMessagesService } from 'angular2-flash-messages';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    //private flashMessage: FlashMessagesService,
    private ngFlashMessageService: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    // Send the instruction to clear the local storage and the memory of the user logged in
    this.authService.logout()
    this.ngFlashMessageService.showFlashMessage({
      messages: ["Tu sesión ha terminado"],
      dismissible: true,
      timeout: false,
      type: 'warning'
    });
    this.router.navigate(['/login']);
    return false;
  }

}

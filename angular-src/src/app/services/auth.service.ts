import { Injectable } from '@angular/core';
// Bring http module and headers package
import { Http, Headers } from '@angular/http';
// Bring map operation cause we are working with observables
import { map } from 'rxjs/operators';

/* Import the JWT token from angular2-jwt
import { tokenNotExpired } from 'angular2-jwt';*/

// Import the JWT service from @auth0/angular-jwt *Angular v6+ and RxJS v6+*
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Propeties
  authToken: any;
  user: any;

  constructor(
    // Inject the http module in the constructor
    private http: Http,
    // Import the JWT service
    public jwtHelper: JwtHelperService
  ) { }

  // Function to register the user
  registerUser(user) {
    // Set a header value
    let headers = new Headers();
    // Add the content type: json | Add the value to a header
    headers.append('Content-Type', 'application/json');
    // Return an observable with the response to our server
    //                               URL of the service          data  like options send the header
    return this.http.post('https://plan-edu.herokuapp.com/users/register', user, { headers: headers })
      .pipe(map(res => res.json()));
    // Map the response to json
  }

  // Function to authenticate an user
  authenticateUser(user) {
    // Set a header value
    let headers = new Headers();
    // Add the content type: json | Add the value to a header
    headers.append('Content-Type', 'application/json');
    // Return an observable with the response to our server
    //                               URL of the service          data  like options send the header
    return this.http.post('https://plan-edu.herokuapp.com/users/authenticate', user, { headers: headers })
      .pipe(map(res => res.json()));
    // Map the response to json
  }

  getProfile() {
    // Set a header value
    let headers = new Headers();
    // Get the value storaged in local storage
    this.loadToken();
    headers.append('Authorization', this.authToken);
    // Add the content type: json | Add the value to a header
    headers.append('Content-Type', 'application/json');
    // Return an observable with the response to our server
    //                               URL of the service          data  like options send the header
    return this.http.get('https://plan-edu.herokuapp.com/users/profile', { headers: headers })
      .pipe(map(res => res.json()));
    // Map the response to json
  }

  // Función que almacena la sesión en el almacenamiento local
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    // Almacena el token y el usuario en el componente
    this.authToken = token;
    this.user = user;
  }

  // Función para obtener el token del almacenamiento local
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Función que devuelve si el token ha expirado o no
  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}

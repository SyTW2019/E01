//import { Injectable } from '@angular/core'; 
//import { Http, Headers } from '@angular/http'; // Bring http module and headers package
//import { map } from 'rxjs/operators'; // Bring map operation cause we are working with observables
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ApuntesService {

    constructor(protected http: HttpClient) {}

    getApuntesList() {
        return this.http.get('http://localhost:3000/apuntes/apuntes');
    }
}
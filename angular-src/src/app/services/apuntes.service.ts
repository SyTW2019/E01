import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class ApuntesService {

    constructor(
        protected http: HttpClient
    ) { }

    getApuntes() {

        return this.http.get('http://localhost:3000/apuntes/apuntes');

    }

    createApuntes(apuntes) {

        return this.http.post('http://localhost:3000/apuntes/apuntes/create',
                              { 
                                titulo:      apuntes.titulo,
                                asignatura:  apuntes.asignatura,
                                curso:       apuntes.curso,
                                grado:       apuntes.grado,
                                universidad: apuntes.universidad,
                                usuario:     apuntes.usuario,
                                autor:       apuntes.autor
                               });

    }

}
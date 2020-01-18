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

    getApuntesId(id) {

        return this.http.get('http://localhost:3000/apuntes/apuntes/' + id);

    }

    deleteApuntes(id) {

        return this.http.delete('http://localhost:3000/apuntes/apuntes/' + id);

    }

    updateApuntes(id, newApuntes) {

        return this.http.post('http://localhost:3000/apuntes/apuntes/' + id,
                              { 
                                titulo:      newApuntes.titulo,
                                asignatura:  newApuntes.asignatura,
                                curso:       newApuntes.curso,
                                grado:       newApuntes.grado,
                                universidad: newApuntes.universidad,
                                usuario:     newApuntes.usuario,
                                autor:       newApuntes.autor
                               });

    }

    searchApuntes(title) {

        return this.http.get('http://localhost:3000/apuntes/apuntes/search/' + title);

    }

}
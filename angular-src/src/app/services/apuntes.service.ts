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

        return this.http.get('https://plan-edu.herokuapp.com/apuntes/apuntes');

    }

    createApuntes(apuntes) {

        return this.http.post('https://plan-edu.herokuapp.com/apuntes/apuntes/create',
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

        return this.http.get('https://plan-edu.herokuapp.com/apuntes/apuntes/' + id);

    }

    deleteApuntes(id) {

        return this.http.delete('https://plan-edu.herokuapp.com/apuntes/apuntes/' + id);

    }

    updateApuntes(id, newApuntes) {

        return this.http.post('https://plan-edu.herokuapp.com/apuntes/apuntes/' + id,
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

        return this.http.get('https://plan-edu.herokuapp.com/apuntes/apuntes/search/' + title);

    }

}
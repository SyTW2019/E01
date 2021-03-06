import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { ApuntesService } from '../../services/apuntes.service';
import { SearchService } from '../../services/search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apuntes: any;

  // Variables del formulario de creación de apuntes
  titulo:      string;
  asignatura:  string;
  curso:       string;
  grado:       string;
  universidad: string;
  usuario:     string;
  autor:       string;

  // Estructura de Apuntes auxiliar para recuperar uno por Id
  apunteId: any;

  // Id auxiliar 
  myId: string;

  visible: boolean = false;

  // Cadena a buscar
  //busqueda: string;

  searchTerm$ = new Subject<string>();

  constructor(
    protected apuntesService: ApuntesService,
    protected searchService: SearchService
  ) {

      this.searchTerm$.subscribe(input => {

        this.visible = true;

        if (input === '') {
          this.visible = false;
          this.cleanSearch();
        }
      });

      this.searchService.search(this.searchTerm$)
      .subscribe(
        (results) => {
          this.apuntes = results;
        },
        (error) => {
          console.error(error);
        });

   }

  ngOnInit() {

    this.apuntesService.getApuntes()
      .subscribe(
        (data) => {
          this.apuntes = data;
          //console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );

  }
/*
  searchByTitulo() {

    this.apuntesService.searchApuntes(this.busqueda)
      .subscribe(
        (data) => {
          this.apuntes = data;
        },
        (error) => {
          console.error(error);
        }
      );

  }*/

  cleanSearch() {

    //this.busqueda = '';

    $('#buscador').val('');

    this.visible = false;

    this.apuntesService.getApuntes()
    .subscribe(
      (data) => {
        this.apuntes = data;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  getApunte(id) {

    this.apuntesService.getApuntesId(id)
      .subscribe(
        (data) => {
          this.apunteId = data;
          this.myId = id;
        },
        (error) => {
          console.error(error);
        }
      );

  }

  getApunteId() {

    return this.apunteId;

  }

  onCreateApuntes() {

    const newApuntes = {
      titulo:      this.titulo,
      asignatura:  this.asignatura,
      curso:       this.curso,
      grado:       this.grado,
      universidad: this.universidad,
      usuario:     this.usuario,
      autor:       this.autor
    };

    this.apuntesService.createApuntes(newApuntes)
      .subscribe(
        (data) => {
          this.ngOnInit();
          //console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );

  }

  onUpdateApuntes(id) {

    const newApuntes = {
      titulo:      this.titulo,
      asignatura:  this.asignatura,
      curso:       this.curso,
      grado:       this.grado,
      universidad: this.universidad,
      usuario:     this.usuario,
      autor:       this.autor
    };

    this.apuntesService.updateApuntes(id,newApuntes)
      .subscribe(
        (data) => {
          this.myId = id;
          this.ngOnInit();
        },
        (error) => {
          console.error(error);
        }
      );

  }

  onDeleteApuntes(id) {

    this.apuntesService.deleteApuntes(id)
      .subscribe(
        (data) => {
          this.ngOnInit();
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
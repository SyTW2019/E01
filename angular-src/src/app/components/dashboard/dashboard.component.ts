import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { ApuntesService } from '../../services/apuntes.service';

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
  //myId: string;

  constructor(
      protected apuntesService: ApuntesService
  ) { }

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

/*  setId(id) {

    this.myId = id;

  }*/

  getApunte(id) {

    this.apuntesService.getApuntesId(id)
      .subscribe(
        (data) => {
          this.apunteId = data;
          console.log(this.apunteId);
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
          this.ngOnInit();
          //console.log(data);
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
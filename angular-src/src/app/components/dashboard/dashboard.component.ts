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

}

import { Component, OnInit } from '@angular/core';
import { ApuntesService } from '../../services/apuntes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apuntesList: any[];

  constructor(
    protected apuntesService: ApuntesService,
  ) {}

  ngOnInit() {
    this.apuntesService.getApuntesList()
      .subscribe(
        (apuntes) => {
          this.apuntesList = apuntes['apts'];
        },
        (err) => {
          console.error(err);
        }
      );
  }

}
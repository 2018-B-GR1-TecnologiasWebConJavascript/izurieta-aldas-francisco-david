import { Component, OnInit } from '@angular/core';
import { RazaRestService } from 'src/app/services/rest/raza-rest.service';
import { Raza } from 'src/app/interfaces/raza';

@Component({
  selector: 'app-user-admin-route',
  templateUrl: './user-admin-route.component.html',
  styleUrls: ['./user-admin-route.component.scss']
})
export class UserAdminRouteComponent implements OnInit {
  razas: Raza[] = [];

  constructor(private readonly _razaRestService: RazaRestService) {}

  ngOnInit() {
    this._razaRestService.findAll().subscribe(
      (razas: Raza[]) => {
        this.razas = razas;
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  delete(id: number) {
    this._razaRestService.delete(id).subscribe(
      response => {
        console.log(response);
        const index = this.razas.findIndex(raza => {
          return raza.id === id;
        });
        this.razas.splice(index, 1);
      },
      error => {
        console.error('Error', error);
      }
    );
  }
}

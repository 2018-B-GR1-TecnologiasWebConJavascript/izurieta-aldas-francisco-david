import { Component, OnInit } from '@angular/core';
import { RazaRestService } from 'src/app/services/rest/raza-rest.service';
import { Raza } from 'src/app/interfaces/raza';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-raza-route',
  templateUrl: './create-raza-route.component.html',
  styleUrls: ['./create-raza-route.component.scss']
})
export class CreateRazaRouteComponent implements OnInit {
  nombre: string = '';

  constructor(private readonly _razaRestService: RazaRestService) {}

  ngOnInit() {}

  crearRaza(formulario: NgForm) {
    console.log(formulario);
    const crearRaza$ = this._razaRestService.create(this.nombre).subscribe(
      (raza: Raza) => {
        console.log('Raza');
        alert(`Raza creada: ${this.nombre}`);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

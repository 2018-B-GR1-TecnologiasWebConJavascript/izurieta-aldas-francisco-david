import { Component, OnInit } from '@angular/core';
import { RazaRestService } from 'src/app/services/rest/raza-rest.service';
import { Raza } from 'src/app/interfaces/raza';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-raza-route',
  templateUrl: './create-raza-route.component.html',
  styleUrls: ['./create-raza-route.component.scss']
})
export class CreateRazaRouteComponent implements OnInit {
  nombre: string = '';

  constructor(
    private readonly _razaRestService: RazaRestService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  crearRaza(razaObjeto) {
    //console.log(formulario);

    //if (this.nombreContieneA(this.nombre)) {
    const crearRaza$ = this._razaRestService.create(razaObjeto).subscribe(
      (raza: Raza) => {
        alert(`Raza creada: ${razaObjeto.nombre}`);

        const url = ['/menu', 'user-admin'];

        this._router.navigate(url);
      },
      error => {
        console.error('Error:', error);
      }
    );
    /*     } else {
      alert('ERROR, No contiene una letra A');
    } */
  }

  nombreContieneA(nombre: string): boolean {
    return nombre.toLowerCase().includes('a');
  }
}

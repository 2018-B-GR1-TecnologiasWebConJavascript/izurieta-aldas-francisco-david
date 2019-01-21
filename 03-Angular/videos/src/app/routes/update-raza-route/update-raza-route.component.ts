import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RazaRestService } from '../../services/rest/raza-rest.service';
import { Raza } from 'src/app/interfaces/raza';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-raza-route',
  templateUrl: './update-raza-route.component.html',
  styleUrls: ['./update-raza-route.component.scss']
})
export class UpdateRazaRouteComponent implements OnInit {
  razaAActualizar: Raza;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _razaRestService: RazaRestService,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$.subscribe(parametros => {
      this.buscarRaza(parametros.idRaza);
    });
  }

  buscarRaza(idRaza: string) {
    const raza$ = this._razaRestService.findOneById(idRaza);
    raza$.subscribe(
      (raza: Raza) => {
        this.razaAActualizar = raza;
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  actualizarRaza(razaActualizada) {
    razaActualizada.id = this.razaAActualizar.id;

    const razaActualizada$ = this._razaRestService.updateOneById(
      razaActualizada
    );

    razaActualizada$.subscribe(
      (razaActualizada: Raza) => {
        const url = ['/menu', 'user-admin'];

        alert('Raza actualizada ' + razaActualizada.nombre);

        this._router.navigate(url);
      },
      error => {
        console.error('Error', error);
      }
    );
  }
}

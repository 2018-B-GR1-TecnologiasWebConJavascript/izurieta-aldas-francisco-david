import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagen-pelicula',
  templateUrl: './imagen-pelicula.component.html',
  styleUrls: ['./imagen-pelicula.component.scss']
})
export class ImagenPeliculaComponent implements OnInit {
  @Input()
  nombre: string;

  @Input()
  titulo: string;

  @Input()
  year: string;

  @Output()
  dioClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  lanzarEventoDioClick() {
    const objetoPelicula = {
      titulo: this.titulo,
      year: this.year,
      nombre: this.nombre
    };

    this.dioClick.emit(objetoPelicula);
  }
}

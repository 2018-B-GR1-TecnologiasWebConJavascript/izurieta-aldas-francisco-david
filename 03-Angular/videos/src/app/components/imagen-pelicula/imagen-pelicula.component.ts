import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
}

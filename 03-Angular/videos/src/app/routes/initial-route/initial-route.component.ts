import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-route',
  templateUrl: './initial-route.component.html',
  styleUrls: ['./initial-route.component.scss']
})
export class InitialRouteComponent implements OnInit {
  imagenes: Imagenes[] = [
    {
      year: 2018,
      nombreImagen: '01.jpeg',
      nombrePelicula: 'Avengers'
    },
    {
      year: 2016,
      nombreImagen: '02.jpeg',
      nombrePelicula: 'Infantil'
    },
    {
      year: 2008,
      nombreImagen: '03.jpeg',
      nombrePelicula: 'Antigua'
    },
    {
      year: 2001,
      nombreImagen: '04.jpeg',
      nombrePelicula: 'Toy Story'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

export interface Imagenes {
  nombreImagen: string;
  nombrePelicula: string;
  year: number;
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-raza-form',
  templateUrl: './raza-form.component.html',
  styleUrls: ['./raza-form.component.scss']
})
export class RazaFormComponent implements OnInit {
  @Input()
  nombre: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();

  nombreRaza: string;
  username: string;
  password: string;

  constructor() {}

  ngOnInit() {
    this.nombreRaza = this.nombre;
  }

  emitirFormularioValido() {
    const objetoRaza = {
      nombre: this.nombreRaza,
      username: this.username,
      password: this.password
    };

    this.formularioValido.emit(objetoRaza);
  }
}

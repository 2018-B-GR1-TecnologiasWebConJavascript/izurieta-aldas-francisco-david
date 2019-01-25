import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Raza } from 'src/app/interfaces/raza';

@Injectable()
export class AuthService {
  usuario;

  constructor(private readonly _httpClient: HttpClient) {}

  login(username: string, password: string): Observable<Raza> {
    const url = environment.url + '/raza/login';

    return this._httpClient.post(url, {
      username: username,
      password: password
    }) as Observable<Raza>;
  }
}

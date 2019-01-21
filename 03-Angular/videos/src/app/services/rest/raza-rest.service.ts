import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Raza } from 'src/app/interfaces/raza';

@Injectable()
export class RazaRestService {
  modelName = '/Raza';

  constructor(private readonly _httpClient: HttpClient) {}

  findAll(): Observable<Raza[]> {
    return this._httpClient.get(environment.url + this.modelName) as Observable<
      Raza[]
    >;
  }

  delete(id: number): Observable<Raza> {
    return this._httpClient.delete(
      environment.url + this.modelName + `/${id}`
    ) as Observable<Raza>;
  }

  create(raza: Raza): Observable<Raza> {
    const url = environment.url + this.modelName;

    return this._httpClient.post(url, raza) as Observable<Raza>;
  }

  findOneById(id: number | string): Observable<Raza> {
    const url = environment.url + this.modelName + '/' + id;

    return this._httpClient.get(url) as Observable<Raza>;
  }

  updateOneById(raza: Raza): Observable<Raza> {
    const url = environment.url + this.modelName + '/' + raza.id;

    return this._httpClient.put(url, raza) as Observable<Raza>;
  }
}

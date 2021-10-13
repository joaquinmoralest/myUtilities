import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  urlBase = 'https://mindicador.cl/api'

  constructor(private httpClient: HttpClient) {
  }
  
  obtenerMonedas(): Promise<any> {
    return new Promise ((resolve, reject) => {
      this.httpClient.get(this.urlBase)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

}

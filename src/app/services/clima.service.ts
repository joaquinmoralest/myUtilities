import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  urlBase= 'https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=353814763a421c4d4021c470fcbd4723';

  constructor(private httpCliente: HttpClient) {
    this.urlBase = 'https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=353814763a421c4d4021c470fcbd4723'
   }

  obtenerClimaSantiago() : Promise <any> {
    return new Promise ((resolve, reject) => {
      this.httpCliente.get(this.urlBase).subscribe(respuesta =>{
        resolve(respuesta);
        },
        (err) => {
          reject(err);
      });
    });
  }

}

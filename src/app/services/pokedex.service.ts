import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  urlBase = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpCliente: HttpClient) {

  }

  getPokemon(pokemon): Promise <any> {
    return new Promise ((resolve, reject) => {
      this.httpCliente.get(`${this.urlBase}${pokemon}`).subscribe(respuesta =>{
        resolve(respuesta);
        },
        (err) => {
          reject(err);
      });
    });
  }
}

import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  pageTitle = 'Clima';
  listadoclimaSantiago: any;
  temperatura;
  nciudad;
  tempmax;
  tempmin;
  iconclima;
  clima;
  descripcion;
  pais;
  humedad;
  senterm;
  presion;
  viento;

  constructor(private climaServicio: ClimaService) { 
    this.listaclimaSantiago();
  }

  listaclimaSantiago(){
    this.climaServicio.obtenerClimaSantiago()
      .then(respuesta => {
        console.log(respuesta);
        this.listadoclimaSantiago = respuesta.data;
        this.temperatura = respuesta.main.temp;
        this.nciudad = respuesta.name;
        this.tempmax = respuesta.main.temp_max;
        this.tempmin = respuesta.main.temp_min;
        this.senterm = respuesta.main.feels_like;
        this.iconclima = 'http://openweathermap.org/img/wn/'+ respuesta.weather[0].icon + ".png";
        this.descripcion = respuesta.weather[0].description;
        this.pais = respuesta.sys.country;
        this.clima = respuesta.weather[0].main;
        this.humedad = respuesta.main.humidity;
        this.presion = respuesta.main.pressure;
        this.viento = respuesta.wind.speed;
      },
      (error) => {
        console.error(error);
      }
    );

  };
  getFormatedTime(dateString){
    var date = new Date(dateString);
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "pm" : "am";
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let time = hours + ":" + minutes + " " + am_pm;
    return time;
 }


  ngOnInit() {
  }

}

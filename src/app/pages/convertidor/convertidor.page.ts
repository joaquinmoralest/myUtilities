import { Component, OnInit } from '@angular/core';
import { MonedasService } from '../../services/convertidor.service';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.page.html',
  styleUrls: ['./convertidor.page.scss'],
})
export class ConvertidorPage implements OnInit {

  pageTitle = 'Convertidor';
  pageText;
  acasaPlatita = "";
  listaMonedas;
  valorDolar;
  cantDolares;
  valorPesos = 0;

  constructor(
    public monedasServicio: MonedasService,
    public navController: NavController,) {
    this.listadoMonedas(); 
   }

   listadoMonedas() {
    this.monedasServicio.obtenerMonedas()
    .then(respuesta => {
      console.log(respuesta);
      this.listaMonedas = respuesta;
      this.valorDolar = respuesta.dolar.valor;
      this.valorPesos = this.valorDolar * this.cantDolares;
      if (this.valorPesos > 0)
          this.pageText = 'Valor en pesos chilenos (CLP) de: ';
      else 
          this.pageText = "";
          this.acasaPlatita = "";     
      if (this.valorPesos > 20000)
          this.acasaPlatita= 'A casa platita crack !!! Más de 20 mil CLP en dólares';    
       
    },
    (error) => {
      console.error(error);
    }
   );
   } 

  ngOnInit() {
  }

}

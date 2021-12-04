import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    public navController: NavController
  ) { }

  ngOnInit() {}

  goToClima() {
    this.navController.navigateForward(['clima/']);
  }

  goToConvertidor() {
    this.navController.navigateForward(['convertidor/']);
  }

  goToPokedex() {
    this.navController.navigateForward(['pokedex/']);
  }
  goToMantenedor() {
    this.navController.navigateForward(['mantenedor/']);
  }
  goToHome() {
    this.navController.navigateForward(['home/']);
  }

}

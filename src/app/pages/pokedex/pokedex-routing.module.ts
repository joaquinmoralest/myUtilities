import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexPage } from './pokedex.page';

const routes: Routes = [
  {
    path: '',
    component: PokedexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PokedexPageRoutingModule {}

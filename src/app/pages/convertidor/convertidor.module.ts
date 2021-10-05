import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertidorPageRoutingModule } from './convertidor-routing.module';

import { ConvertidorPage } from './convertidor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertidorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConvertidorPage]
})
export class ConvertidorPageModule {}

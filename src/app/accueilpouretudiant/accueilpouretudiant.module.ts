import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilpouretudiantPageRoutingModule } from './accueilpouretudiant-routing.module';

import { AccueilpouretudiantPage } from './accueilpouretudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilpouretudiantPageRoutingModule
  ],
  declarations: [AccueilpouretudiantPage]
})
export class AccueilpouretudiantPageModule {}

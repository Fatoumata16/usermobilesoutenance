import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resultat2PageRoutingModule } from './resultat2-routing.module';

import { Resultat2Page } from './resultat2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resultat2PageRoutingModule
  ],
  declarations: [Resultat2Page]
})
export class Resultat2PageModule {}

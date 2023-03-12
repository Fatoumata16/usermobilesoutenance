import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profil2PageRoutingModule } from './profil2-routing.module';

import { Profil2Page } from './profil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profil2PageRoutingModule
  ],
  declarations: [Profil2Page]
})
export class Profil2PageModule {}

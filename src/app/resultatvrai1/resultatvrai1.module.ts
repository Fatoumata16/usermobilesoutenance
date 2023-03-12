import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resultatvrai1PageRoutingModule } from './resultatvrai1-routing.module';

import { Resultatvrai1Page } from './resultatvrai1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resultatvrai1PageRoutingModule
  ],
  declarations: [Resultatvrai1Page]
})
export class Resultatvrai1PageModule {}

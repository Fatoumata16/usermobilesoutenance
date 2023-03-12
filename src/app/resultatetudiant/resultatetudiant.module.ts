import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatetudiantPageRoutingModule } from './resultatetudiant-routing.module';

import { ResultatetudiantPage } from './resultatetudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatetudiantPageRoutingModule
  ],
  declarations: [ResultatetudiantPage]
})
export class ResultatetudiantPageModule {}

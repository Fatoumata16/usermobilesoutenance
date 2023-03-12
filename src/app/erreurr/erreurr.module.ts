import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErreurrPageRoutingModule } from './erreurr-routing.module';

import { ErreurrPage } from './erreurr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErreurrPageRoutingModule
  ],
  declarations: [ErreurrPage]
})
export class ErreurrPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VraiaccueilPageRoutingModule } from './vraiaccueil-routing.module';

import { VraiaccueilPage } from './vraiaccueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VraiaccueilPageRoutingModule
  ],
  declarations: [VraiaccueilPage]
})
export class VraiaccueilPageModule {}

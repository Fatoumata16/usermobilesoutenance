import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Voirmoyenne2PageRoutingModule } from './voirmoyenne2-routing.module';

import { Voirmoyenne2Page } from './voirmoyenne2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Voirmoyenne2PageRoutingModule
  ],
  declarations: [Voirmoyenne2Page]
})
export class Voirmoyenne2PageModule {}

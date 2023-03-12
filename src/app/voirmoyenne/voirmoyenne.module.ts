import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirmoyennePageRoutingModule } from './voirmoyenne-routing.module';

import { VoirmoyennePage } from './voirmoyenne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirmoyennePageRoutingModule
  ],
  declarations: [VoirmoyennePage]
})
export class VoirmoyennePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prev3PageRoutingModule } from './prev3-routing.module';

import { Prev3Page } from './prev3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prev3PageRoutingModule
  ],
  declarations: [Prev3Page]
})
export class Prev3PageModule {}

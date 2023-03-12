import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Essayprevencore2PageRoutingModule } from './essayprevencore2-routing.module';

import { Essayprevencore2Page } from './essayprevencore2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Essayprevencore2PageRoutingModule
  ],
  declarations: [Essayprevencore2Page]
})
export class Essayprevencore2PageModule {}

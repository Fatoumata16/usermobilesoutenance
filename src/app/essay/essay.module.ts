import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssayPageRoutingModule } from './essay-routing.module';

import { EssayPage } from './essay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssayPageRoutingModule
  ],
  declarations: [EssayPage]
})
export class EssayPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssayprevPageRoutingModule } from './essayprev-routing.module';

import { EssayprevPage } from './essayprev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssayprevPageRoutingModule
  ],
  declarations: [EssayprevPage]
})
export class EssayprevPageModule {}

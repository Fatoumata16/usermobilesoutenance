import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotejuryPageRoutingModule } from './votejury-routing.module';

import { VotejuryPage } from './votejury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotejuryPageRoutingModule
  ],
  declarations: [VotejuryPage]
})
export class VotejuryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotevaliderPageRoutingModule } from './votevalider-routing.module';

import { VotevaliderPage } from './votevalider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotevaliderPageRoutingModule
  ],
  declarations: [VotevaliderPage]
})
export class VotevaliderPageModule {}

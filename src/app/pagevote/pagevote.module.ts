import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagevotePageRoutingModule } from './pagevote-routing.module';

import { PagevotePage } from './pagevote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagevotePageRoutingModule
  ],
  declarations: [PagevotePage]
})
export class PagevotePageModule {}

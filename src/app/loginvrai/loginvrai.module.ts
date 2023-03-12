import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginvraiPageRoutingModule } from './loginvrai-routing.module';

import { LoginvraiPage } from './loginvrai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginvraiPageRoutingModule
  ],
  declarations: [LoginvraiPage]
})
export class LoginvraiPageModule {}

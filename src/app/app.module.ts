import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AccueiljuryPipe } from './accueiljury.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,IonicModule.forRoot(), AppRoutingModule, ChartModule,HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

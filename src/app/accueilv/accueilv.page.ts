import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueilv',
  templateUrl: './accueilv.page.html',
  styleUrls: ['./accueilv.page.scss'],
})
export class AccueilvPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };
  slideOpt = {
    
    speed: 700,
    initialSlide: 1,
 slidesPerView: 1,
 autoplay:true

  };

}

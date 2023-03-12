import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueiljury',
  templateUrl: './accueiljury.page.html',
  styleUrls: ['./accueiljury.page.scss'],
})
export class AccueiljuryPage implements OnInit {
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };
  constructor() { }

  ngOnInit() {
  }

}

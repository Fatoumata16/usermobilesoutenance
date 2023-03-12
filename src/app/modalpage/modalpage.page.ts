import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpt = {
    
    speed: 700,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };
}

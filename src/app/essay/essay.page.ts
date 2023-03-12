import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-essay',
  templateUrl: './essay.page.html',
  styleUrls: ['./essay.page.scss'],
})
export class EssayPage implements OnInit {
  items=[1,2,3,4,5]
  currentindex=0
  item!:any[]
  duration!: any
  progressValue = 0.5;

  constructor( private route:Router,public routeur:ActivatedRoute,private serv:StockageeService) {
    this.serv.ladureequireste(2).subscribe(dat=>{
      this.duration=dat,
      console.log(this.duration)
    })
    
   }

  ngOnInit() {
    // this.serv.soutenanceactuelquiacommence(2).subscribe(data=>{
    //   this.item=data,
    //   console.log(this.item)
    // });
    this.startTimer()
   
    
  }
nextitem(){
  if(this.currentindex<this.items.length - 1){
    this.currentindex++
  }
}

previousitem(){
  if(this.currentindex<this.items.length - 1){
    this.currentindex--
  }
}

slideOpt = {
  speed: 700,
  initialSlide: 1,
slidesPerView: 1,
autoplay:true
};

startTimer() {
  setInterval(() => {
    this.serv.ladureequireste(2).subscribe(data=>{
      this.duration=data
    })
  }, 1000);
}

}

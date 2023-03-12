import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-essayprev',
  templateUrl: './essayprev.page.html',
  styleUrls: ['./essayprev.page.scss'],
})
export class EssayprevPage implements OnInit {
  o!:any
  n!:any
  p!:any

  duration!: any
  progressValue = 0.5;

  constructor(public modalController: ModalController, private route:Router,public routeur:ActivatedRoute,private serv:StockageeService) {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
    

    console.log(this.o)
    this.serv.ladureequireste(this.o).subscribe(dat=>{
      this.duration=dat,
      console.log(this.duration)
    })
  })
   }

  ngOnInit() {
    
    console.log( localStorage.getItem('username'))
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
    this.n=localStorage.getItem('username')
    console.log(this.o)})
    this.startTimer()

  }
  startTimer() {
    setInterval(() => {
      this.serv.ladureequireste(this.o).subscribe(data=>{
        if(data){
          this.duration=data
            
        }
       
      })
    }, 1000);
  }
}

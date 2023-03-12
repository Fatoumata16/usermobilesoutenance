import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-accueilpouretudiant',
  templateUrl: './accueilpouretudiant.page.html',
  styleUrls: ['./accueilpouretudiant.page.scss'],
})
export class AccueilpouretudiantPage implements OnInit {
  o: any;
  l!: any[];
  d: any;
  h: any;
  k: any;
  y: any;
  w: any;
  i: any;
  q: any;
  dex: any;
  enc: any;
  lol: any;
  pp: any;
  pl: any;
  pi: any;
  p1: any;
  p2: any;
  p3: any;

  constructor(private serv:StockageeService,private navController: NavController,private route:Router) { }

  ngOnInit() {
    this.serv.liste5meilleuretudiant().subscribe(data=>{
      console.log(" les 55555555555555555555555555")
      this.d=data[0]
      this.i=this.d[1]
      this.dex=this.d[2]
      this.q=this.d[3]
      this.h=data[1]
      this.enc=this.h[1]
      this.lol=this.h[2]
      this.pp=this.h[3]
      this.k=data[2]
      this.y=this.k[1]
      this.pl=this.k[2]
      this.pi=this.k[3]

      this.w=data[3]
      this.p1=this.w[1]
      this.p2=this.w[2]

      this.p3=this.w[3]


      console.log(this.d)
      console.log(" le 111111111111111111")
      console.log(this.h)
    })
    console.log('le nommmmmmm')
    console.log( localStorage.getItem('username'))
 this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

 console.log(this.o)
 
     this.serv.etudiantlisteparpromotion(this.o).subscribe(dat=>{
      this.l=dat
      console.log(this.l)
     })
 
})
  }
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };
}

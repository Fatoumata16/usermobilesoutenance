import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-prev2',
  templateUrl: './prev2.page.html',
  styleUrls: ['./prev2.page.scss'],
})
export class Prev2Page implements OnInit {
  item!:any[]
  items!:any[]
  it!:any[]
  o!:any
  segmentModel = "all";
  f:any
  p: any;
  k: any;
  pi: any;
  nop!: any;
  constructor( private serv:StockageeService,private route:Router) { }
  ngOnInit() {
    console.log('le nommmmmmm')
    console.log( localStorage.getItem('username'))
    this.nop=localStorage.getItem('username')
 //this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
   
 //console.log(this.o)})
 this.serv.trouverutilisateurparnomn().subscribe((da: any)=>{
  this.o=da
  console.log(this.o)
  this.serv.lesjurysparrapportaetudiantlu(this.o).subscribe(data=>{
    this.p=data
    console.log(" le pppppppppppppppppp")
    console.log(this.p)
  })
  this.serv.lesjurysparrappor(this.o).subscribe(data=>{
    this.pi=data
    console.log(" le 222222222222222")
    console.log(this.pi)
  })
  this.serv.lesjuryspar(this.o).subscribe(data=>{
    this.k=data
    console.log(" le 33333333333333333333333")
    console.log(this.k)
  })
  this.serv.soutenanceactuelquiacommence(this.o).subscribe(data=>{
      this.item=data
                           
    })
     this.serv.soutenanceactuelquiacommenceetetudiantlu(this.o).subscribe(data=>{
      this.items=data
      
    })
    
    this.serv.listehisto(this.o).subscribe(data=>{
      this.it=data,
      console.log("l'autreee historique")
      console.log(this.it)
    })
})
    
   
  }
  slideOpt = {
    speed: 700,
    initialSlide: 1,
 slidesPerView: 1,
 autoplay:true
  };
  segmentChanged(event:any){
    console.log(this.segmentModel);
    
    console.log(event);
  }
  m!: number;
  presentingElement :any;
  tab!:any[];


  nex(id:any ){
    this.serv.soutenanceactuelstatut(this.o).subscribe(data=>{
    
      //si le statut est egal a un 
        if(data){
          this.route.navigate(['/votejury',id]); // rediriger l'utilisateur vers une autre page
        }
        else{
          this.route.navigate(['/votejury2',id]); // rediriger l'utilisateur vers une autre page
        }
      }
    ,error => {
      this.route.navigate(['/login']); 
      // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
    });}

}

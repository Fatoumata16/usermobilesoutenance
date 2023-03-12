import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.page.html',
  styleUrls: ['./acc.page.scss'],
})
export class AccPage implements OnInit {
  segmentModel = "all";
  f:any
  o!:any
  t!:any[]
  constructor( private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.serv.toutformation().subscribe
    (data=>{this.f=data
     console.log(this.f)
    }),
    this.presentingElement = document.querySelector('.ion-page');
    console.log('le nommmmmmm')
    console.log( localStorage.getItem('username'))
 this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

 console.log(this.o)
 this.serv.listeetudiantparsoutenance(this.o).subscribe(data=>{
  this.t=data;
  console.log(" le ttttttttttttt")
  console.log(this.t)


 })
     
 
} )
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
  handleChange(e:any) {
   // console.log(e.target.value)
    const value=e.target.value;
   this.serv.promotionrecentparrapportaformation(value).subscribe(data=>{
    //console.log(data[0])
    this.m=data[0];
    console.log(this.m)
    this.serv.toutetudiantparrapportapromotion(this.m).subscribe(data=>{
      this.tab=data             
      if(this.tab.length!=0){
        console.log(this.tab);
      }
      else{
        console.log("le tableau est vide maintenant");
        console.log(this.tab);

      }
     })
   })  
  } m!: number;
  presentingElement :any;
  tab!:any[];
 
 
}

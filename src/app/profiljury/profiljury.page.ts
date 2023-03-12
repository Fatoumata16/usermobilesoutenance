import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-profiljury',
  templateUrl: './profiljury.page.html',
  styleUrls: ['./profiljury.page.scss'],
})
export class ProfiljuryPage implements OnInit {

  id!:number
   o!:any
   t:any
   m!:any
   nom!:any
   prenom!:any
   projet!:any
   projetdesc!:any
  constructor(private route:Router, public routeur:ActivatedRoute,private serv:StockageeService) { }
  ngOnInit() {
    // this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

    // console.log(this.o)})
    this.serv.juryparnom(localStorage.getItem('username')).subscribe(data=>{this.t=data
      console.log("le ttttttttttttttttttttttttttttttttttttttttt")
      console.log(this.t);
      this.projet=this.t.username
      this.m=this.t[1]
      this.nom=this.t.nom
      this.prenom=this.t.prenom
      this.projetdesc=this.t.email
      
    })
    
    // il reste a afficher le t
  }

 
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.page.html',
  styleUrls: ['./etudiant.page.scss'],
})
export class EtudiantPage implements OnInit {
  menu:boolean=true;
  id!:number
  o!:any
  t:any
  m!:any
  nom!:any
  prenom!:any
  projet!:any
  projetdesc!:any
  j: any;
 constructor(private route:Router, public routeur:ActivatedRoute,private serv:StockageeService) { }
 ngOnInit() {

   this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

   console.log(this.o)
   this.serv.infoetudiant(this.o).subscribe(data=>{this.t=data
   
   if (this.t) {
     console.log(this.t);
     } else {
     console.log("t n'est pas défini");
     }
     this.projet=this.t[0]
     this.m=this.t[1]
     this.nom=this.t[2]
     this.prenom=this.t[3]
     this.projetdesc=this.t[4]
     
   })
  })
   
   // il reste a afficher le t
 }

 valler(){
  this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
  this.serv.soutenancesidpourunetudiant(this.o).subscribe(da=>{
    this.j=da 
    console.log(this.j)
    this.serv.etudiantresultatsoutenance(this.j).subscribe(data=>{
      console.log("le vrai data aaaaaaaaaaaaaaaaaaaaaaaaa")
      console.log(data)
      if(data){

        this.route.navigate(['/resultatvrai1']); 
      }
      else{
        this.route.navigate(['/erreurr']); 

      }
    })
  }) })
 
 }
 val(){

  this.serv.soutenanceactuelstatut(this.o).subscribe(data=>{
   
    //si le statut est egal a un  vote et pagevote
      if(data){
        this.route.navigate(['/pagevote',this.id]); // rediriger l'utilisateur vers une autre page
      }
      else{
        this.route.navigate(['/evaluation',this.id]); // rediriger l'utilisateur vers une autre page
      }
    }
  ,error => {
    this.route.navigate(['/login']); 
    // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
  });
 }

 vali(){
  this.serv.soutenancestatutpourunetudiant(this.o).subscribe(data=>{
  
    
      if(data){
        this.route.navigate(['/vote']); // rediriger l'utilisateur vers une autre page
      }
      else{
        this.route.navigate(['/vote2']); // rediriger l'utilisateur vers une autre page
      }
    }
  ,error => {
    this.route.navigate(['/login']); 
    // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
  });
}
}

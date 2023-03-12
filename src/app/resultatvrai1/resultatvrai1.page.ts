import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-resultatvrai1',
  templateUrl: './resultatvrai1.page.html',
  styleUrls: ['./resultatvrai1.page.scss'],
})
export class Resultatvrai1Page implements OnInit {

  menu:boolean=true;
  id!:number
  o!:any
  t:any
  m!:any
  nom!:any
  prenom!:any
  projet!:any
  projetdesc!:any
  q: any;
 constructor(private route:Router, public routeur:ActivatedRoute,private serv:StockageeService) { }
 ngOnInit() {
   this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

   console.log(this.o)
   this.serv.infoetudiant(this.o).subscribe(data=>{this.t=data
   
   if (this.t) {
     console.log(this.t);
     } else {
     }
     this.projet=this.t[0]
     this.m=this.t[1]
     this.nom=this.t[2]
     this.prenom=this.t[3]
     this.projetdesc=this.t[4]
     
   })
  


  this.serv.soutenancestatutpourunetudiant(this.o).subscribe(data=>{
    console.log(" le data 1111111111111")
    console.log(data)
    
    if(data){
      console.log(" entrer dans le if")
      console.log(data)
      this.serv.noteetudiantparid(this.o).subscribe(da=>{
        console.log(" le daaaaaaaaaaaaa")
        console.log(da)
        this.q=da[0]
      })
    }
    else{
      console.log(" entrer dans le else")
      console.log(data)
      this.serv.resultatetudiantvalideroupas(this.o).subscribe((d: any)=>{
        console.log(" le daaaaaaaaaaaaad")

        console.log(d)
        this.q=d.status
        console.log(this.q)
      }) // rediriger l'utilisateur vers une autre page
    }
  })})
   
   // il reste a afficher le t
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
        this.route.navigate(['/voirmoyenne']); // rediriger l'utilisateur vers une autre page
      }
      else{
        this.route.navigate(['/voirmoyenne2']); // rediriger l'utilisateur vers une autre page
      }
    }
  ,error => {
    this.route.navigate(['/login']); 
    // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
  });
}

}

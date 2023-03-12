import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-loginvrai',
  templateUrl: './loginvrai.page.html',
  styleUrls: ['./loginvrai.page.scss'],
})
export class LoginvraiPage implements OnInit {

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
   this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

   console.log(this.o)})
   this.id=this.routeur.snapshot.params['id']
   this.serv.infoetudiant(this.id).subscribe(data=>{this.t=data
   
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
   
   // il reste a afficher le t
 }

 val(){
  console.log(" le dataaaaaaaaaaaaaaaaa")
   console.log(this.o)
   this.serv.etudianttatutchanger(this.nom).subscribe(data=>{console.log("fait")})
   this.serv.soutenanceactuelstatut(this.o).subscribe(data=>{
     console.log(" le dataaaaaaaaaaaaaaaaa")
     console.log(data)
     //si le statut est egal a un 
       if(data){
         this.route.navigate(['/votejury',this.id]); // rediriger l'utilisateur vers une autre page
       }
       else{
         this.route.navigate(['/votejury2',this.id]); // rediriger l'utilisateur vers une autre page
       }
     }
   ,error => {
     this.route.navigate(['/login']); 
     // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
   });
 }
}

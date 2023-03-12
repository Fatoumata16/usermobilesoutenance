import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
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
    this.id=this.routeur.snapshot.params['id']
    this.serv.infoetudiant(this.id).subscribe(data=>{this.t=data
      console.log("le ttttttttttttttttttttttttttttttttttttttttt")
      console.log(this.t);
      this.projet=this.t[0]
      this.m=this.t[1]
      this.nom=this.t[2]
      this.prenom=this.t[3]
      this.projetdesc=this.t[4]
      
    })
    
    // il reste a afficher le t
  }

  val(){
    this.serv.soutenanceactuelstatut(this.o).subscribe(data=>{
    
      //si le statut est egal a un 
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
}

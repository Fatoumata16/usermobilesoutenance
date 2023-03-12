import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-resultat2',
  templateUrl: './resultat2.page.html',
  styleUrls: ['./resultat2.page.scss'],
})
export class Resultat2Page implements OnInit {
  o!:any
  l!:string
  constructor(private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    console.log('le nommmmmmm')
    console.log( localStorage.getItem('username'))
 this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

 console.log(this.o)})
 
}
  
  val(){
    this.serv.soutenancestatutpourunetudiant(this.o).subscribe(data=>{
    
      
        if(data){
          this.route.navigate(['/login']); // rediriger l'utilisateur vers une autre page
        }
        else{
          this.route.navigate(['/prev2']); // rediriger l'utilisateur vers une autre page
        }
      }
    ,error => {
      this.route.navigate(['/login']); 
      // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
    });
  }
}

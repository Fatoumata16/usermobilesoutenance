import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  o!:any
  l!:string
  
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  }; f:any
  slideOpt = {
    speed: 700,
    initialSlide: 1,
  slidesPerView: 1,
  autoplay:true
  };
  steps = [1, 2, 3, 4, 5];
  progress = 2;
  completed = 3;
  it!: any[];
  lo!:any
  constructor( private serv:StockageeService,private navController: NavController,private route:Router) { }

  ngOnInit() {
    this.lo=localStorage.getItem('username')
       console.log('le nommmmmmm')
       console.log( localStorage.getItem('username'))
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

    console.log(this.o)
    
        
    
  }
    
    )
    
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
   val(){
    //verification si la soutenance a commencer ou pas 
    this.serv.recherchelasoutenancequiacommencere(this.o).subscribe(data=>{
        if(data){
          this.route.navigate(['/prev2']); // rediriger l'utilisateur vers une autre page
        }
        else{
          this.route.navigate(['/prev3']); // rediriger l'utilisateur vers une autre page
        }
      }
    ,error => {
      this.route.navigate(['/prev3']); 
      // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
    });
  }
  al(){
    this.serv.historiquesoutenance(this.o).subscribe(data=>{
      this.it=data,
      console.log("l'autreee historique")
      console.log(this.it)
      if(data){
        this.navController.navigateForward('/historique');

      }
      else{
        this.navController.navigateForward('/prev3');
      }
    },
    error => {
      this.navController.navigateForward('/prev4');      // gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
    });
  }
}

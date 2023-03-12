import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-votejury2',
  templateUrl: './votejury2.page.html',
  styleUrls: ['./votejury2.page.scss'],
})
export class Votejury2Page implements OnInit {
  d!:any[]
  id!:number
  items!:any[]
  o!:any
  currentindex=0
  votrenote!:number
  evaluationPercentage = 0;
  pl: any;
  pl2: any;
  pr: any;
  desc: any;
    constructor( public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }
  
    ngOnInit() {
      
      this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
  
      console.log(this.o)})
      this.id=this.routeur.snapshot.params['id']
  
      this.serv.infocritere(this.id).subscribe(data=>{
       this.items=data;
      })
      this.serv.etudiantparid(this.id).subscribe(data=>{
        this.pl=data.nom
        this.pl2=data.prenom
        console.log("le plllllllllll")
        console.log(this.pl)
      })
      this.serv.infoetudiant(this.id).subscribe(data=>{
        console.log("infooooooooo")
        console.log(data)
        this.pr=data[0]
        this.desc=data[4]
      })
    }
  
      
    nextitem(ide:any){
     
      if(this.currentindex<=this.items.length - 1){
        this.currentindex++
        this.evaluationPercentage = this.evaluationPercentage + (1 / this.items.length);
    
        if (this.currentindex === this.items.length) {
         this.router.navigate(['/votevalider',this.id]);
        }
      }
    }
    vrai(ide:any){
      console.log(this.id)
      this.serv.ajoutnotee(true,"comm",this.id,this.o,ide).subscribe(data=>{
        console.log(data)})
        console.log(this.items.length)
      if(this.currentindex<=this.items.length - 1){
        this.currentindex++
        if (this.currentindex === this.items.length) {
          this.router.navigate(['/votevalider',this.id]);
         }
        this.evaluationPercentage = this.evaluationPercentage + (1 / this.items.length);
         // console.log(this.currentindex)
       
      }
      
    }
    faux(ide:any){
      console.log(this.id)
      this.serv.ajoutnotee(false,"comm",this.id,this.o,ide).subscribe(data=>{
        console.log(data)})
      if(this.currentindex<=this.items.length - 1){
        this.currentindex++
        this.evaluationPercentage = this.evaluationPercentage + (1 / this.items.length);
    }}
    
    previousitem(){
      if(this.currentindex<=this.items.length - 1){
        this.currentindex--
        this.evaluationPercentage = this.evaluationPercentage - (1 / this.items.length);
  
      } 
  }

}

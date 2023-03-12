import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {
d!:any[]
id!:number
items!:any[]
o!:any
currentindex=0
votrenote!:number
evaluationPercentage = 0;
  constructor( public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }

  ngOnInit() {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

    console.log(this.o)})
    this.id=this.routeur.snapshot.params['id']

    this.serv.infocritere(this.id).subscribe(data=>{
     this.items=data;
    })

  }

    
  nextitem(ide:any){
   
    if(this.currentindex<=this.items.length - 1){
      this.currentindex++
      this.evaluationPercentage = this.evaluationPercentage + (1 / this.items.length);
  
      if (this.currentindex === this.items.length) {
       alert("vous etes a la fin")
       this.router.navigate(['/bravo',this.id]);
      }
    }
  }
  vrai(ide:any){
    console.log(this.id)
    this.serv.ajoutnotee(true,"comm",this.id,this.o,ide).subscribe(data=>{
      console.log(data)})
    if(this.currentindex<=this.items.length - 1){
      this.currentindex++
      this.evaluationPercentage = this.evaluationPercentage + (1 / this.items.length);
  
     
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

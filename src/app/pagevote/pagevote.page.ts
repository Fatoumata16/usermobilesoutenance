import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';
@Component({
  selector: 'app-pagevote',
  templateUrl: './pagevote.page.html',
  styleUrls: ['./pagevote.page.scss'],
})
export class PagevotePage implements OnInit {
  id!:number
  o!:any
  items!:any[]
  currentindex=0
  votrenote!:number
  evaluationPercentage = 0;
  constructor( public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }
  ngOnInit() {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

    console.log(this.o)})
    this.id=this.routeur.snapshot.params['id']
    this.serv. infocritere(this.id).subscribe(data=>{this.items=data
    console.log(this.items)
    })
  }
  nextitem(ide:any){
    console.log(this.id)
    this.serv.ajoutnote(this.votrenote,"comm",this.id,this.o,ide).subscribe(data=>{
      console.log(data)})
    if(this.currentindex<=this.items.length - 1){
      this.currentindex++
      this.evaluationPercentage = this.evaluationPercentage + (1 / this.items.length);
  
      if (this.currentindex === this.items.length) {
       alert("vous etes a la fin")
       this.router.navigate(['/bravo',this.id]);
      }
    }
  }
  
  previousitem(){
    if(this.currentindex<=this.items.length - 1){
      this.currentindex--
      this.evaluationPercentage = this.evaluationPercentage - (1 / this.items.length);

    } 
}
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-votejury',
  templateUrl: './votejury.page.html',
  styleUrls: ['./votejury.page.scss'],
})
export class VotejuryPage implements OnInit {

  id!:number
  o!:any
  items!:any[]
  currentindex=0
  votrenote!:number
  evaluationPercentage = 0;
  tp: any;
  projet: any;
  mp: any;
  nom: any;
  prenom: any;
  projetdesc: any;
  constructor( public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }
  ngOnInit() {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

    console.log(this.o)})
    this.id=this.routeur.snapshot.params['id']
    this.serv. infocritere(this.id).subscribe(data=>{this.items=data
    console.log(this.items)
    })
    this.serv.infoetudiant(this.id).subscribe(data=>{this.tp=data

      if (this.tp) {
        console.log(this.tp);
        } else {
        }
        this.projet=this.tp[0]
        this.mp=this.tp[1]
        this.nom=this.tp[2]
        this.prenom=this.tp[3]
        this.projetdesc=this.tp[4]
        
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
       this.router.navigate(['/votevalider',this.id]);
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

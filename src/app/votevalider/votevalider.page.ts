import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-votevalider',
  templateUrl: './votevalider.page.html',
  styleUrls: ['./votevalider.page.scss'],
})
export class VotevaliderPage implements OnInit {

  id!: number;
  o: any;
  items: any;
  tp: any;
  projet: any;
  mp: any;
  nom: any;
  prenom: any;
  projetdesc: any;

  constructor(public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }

  ngOnInit() {
    this.id=this.routeur.snapshot.params['id']
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
valide(){
  this.serv.etatetudiant(this.id).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/tabs/accueil']);

  })
}
}

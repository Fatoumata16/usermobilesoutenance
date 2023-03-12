import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})
export class ResultatPage implements OnInit {
  t:any
  o: any;
  j: any;
  p: any;
  h: any;
  k: any;
  constructor( public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }

  ngOnInit() {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
    this.serv.soutenancesidpourunetudiant(this.o).subscribe(da=>{
      this.j=da  
      console.log("le jjjjjjjjjjjj")
      console.log(this.j)
      this.serv.etudiantordonneeparpromotionnote(this.j).subscribe(data=>{
        this.t=data,
        this.p=this.t[0][1]
        this.h=this.t[1][1]
        this.k=this.t[2][1]
        console.log(this.p)
        console.log(this.t)

      })

    })
  })
  }
}

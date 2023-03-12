import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  it!:any[]
  o!:any
  l!: any[];
  presentingElement: any;

  constructor(private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');

    this.serv.trouverutilisateurparnomn().subscribe((da: any)=>{
      this.o=da
        this.serv.historiquesoutenance(this.o).subscribe(data=>{
          this.it=data,
          console.log("l'autreee historique")
          console.log(this.it)
        })
    })
  }
  all(i:any){
    this.serv.listeetudiantparsoutenanceautre(i).subscribe(data=>{
      this.l=data
      console.log(this.l)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-voirmoyenne2',
  templateUrl: './voirmoyenne2.page.html',
  styleUrls: ['./voirmoyenne2.page.scss'],
})
export class Voirmoyenne2Page implements OnInit {

  showLoader!: boolean;
  p_bar_value!: number;
  t!:any[] 
  m:any
  b!:number
  o: any;
  tp: any;
  projet: any;
  mp: any;
  nom: any;
  prenom: any;
  projetdesc: any;
  q: any;
  constructor(public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }

  ngOnInit() {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")

    console.log(this.o)
    this.serv.resultatetudiantvalideroupas(this.o).subscribe((d: any)=>{
      console.log(" le daaaaaaaaaaaaad")

      console.log(d)
      this.q=d.status
    })
    this.serv.resultatautreetudint(this.o).subscribe(data=>{
      this.t=data
      console.log("le resultatttttt11111111111")

      console.log(data)

    })

    
    this.serv.infoetudiant(this.o).subscribe(data=>{this.tp=data

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
    this.serv.resultatetudiantvalideroupas(this.o).subscribe((data: any)=>{
      console.log("le resultatttttt")
      console.log(data)
    })
    this.serv.noteetudiantparid(this.o).subscribe(data=>{
     this.b=data[0]

      console.log(data)
    })})
  }


  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }
  runDeterminateProgress() {
    this.showProgressBar()
    for (let index = 0; index <= 100; index++) {
      this.setPercentBar(+index);
    }
  }
  setPercentBar(i:any) {
    setTimeout(() => {
      let apc = (i / 100)
      console.log(apc);
      this.p_bar_value = apc;
    }, 30 * i);
  }

}

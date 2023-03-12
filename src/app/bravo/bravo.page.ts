import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.page.html',
  styleUrls: ['./bravo.page.scss'],
})
export class BravoPage implements OnInit {
  id!: number;

  constructor(public routeur:ActivatedRoute,private serv:StockageeService,private router: Router) { }

  ngOnInit() {
    this.id=this.routeur.snapshot.params['id']

  }
valide(){
  this.serv.etatetudiant(this.id).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/tabs/acc']);

  })
}
}

import { Component, OnInit } from '@angular/core';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-mes2',
  templateUrl: './mes2.page.html',
  styleUrls: ['./mes2.page.scss'],
})
export class Mes2Page implements OnInit {

  notifications!: any[] ;
  id: any;

  constructor(private serv:StockageeService) {}

  ngOnInit() {
    // this.id=this.routeur.snapshot.params['id']
    const expediteur = 'fantisca747@gmail.com';
    const destinateur = 'mahamadou88@gmail.com';
    this.serv.messagesend(expediteur,destinateur).subscribe(data=>{
      this.notifications=data;
      console.log(this.notifications)
    })
  }

}

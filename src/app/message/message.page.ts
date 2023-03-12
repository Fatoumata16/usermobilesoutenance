import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  id: any;
  l!: any[];

  constructor(private serv:StockageeService,public routeur:ActivatedRoute) {}

  ngOnInit() {
    this.id=this.routeur.snapshot.params['id']
    this.serv.listeetudiantparsoutenanceautre(this.id).subscribe(data=>{
      this.l=data
      console.log(this.l)
    })
   
  }
 

}

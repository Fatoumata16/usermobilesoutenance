import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-prev3',
  templateUrl: './prev3.page.html',
  styleUrls: ['./prev3.page.scss'],
})
export class Prev3Page implements OnInit {
  o: any;
  n!: string | null;

  constructor(private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.serv. trouverutilisateurparnom( localStorage.getItem('username')).subscribe((data: any)=>{this.o=data,console.log("le ooooooooo")
    this.n=localStorage.getItem('username')
    console.log(this.o)})
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  role!:any;
  o: any;
  j: any;
  p: boolean=false;

  constructor(private route:Router, public routeur:ActivatedRoute,private serv:StockageeService) {}
  ngOnInit(): void {
    this.role = localStorage.getItem('role'); 
  
  }
  
 
     
  

}
